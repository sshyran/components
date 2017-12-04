const {relative, dirname} = require('path');
const {Observable} = require('rxjs/Observable');
const set = require('lodash/fp/set');
const mapValues = require('lodash/fp/mapValues');
const join = require('lodash/fp/join');
const pipe = require('lodash/fp/pipe');
const keys = require('lodash/fp/keys');
const values = require('lodash/fp/values');
const split = require('lodash/fp/split');
const map = require('lodash/fp/map');
const {readComponents$} = require('./observables/components');
const {readFixtures$} = require('./observables/fixtures');

const readComponentImports$ = (cwd, target) =>
  readComponents$(cwd).map(({title, path}) => {
    const relativePath = relative(dirname(target), path);
    return `import ${title} from './${relativePath}';`;
  });

const readFixtureImports$ = (cwd, target) =>
  readFixtures$(cwd).map(({title, fixture, fixturePath}) => {
    const relativePath = relative(dirname(target), fixturePath);
    return `import ${title}Fixture${fixture} from '${relativePath}';`;
  });

const mapValuesWithKey = mapValues.convert({cap: false});

const readComponentExports$ = cwd =>
  readComponents$(cwd)
    .reduce((acc, {title, type, path}) => set([type, title], path, acc), {})
    .concatMap(
      pipe(
        mapValuesWithKey((titles, type) => {
          return pipe(keys, join(',\n    '), s => `${type}: {\n    ${s}\n  }`)(titles);
        }),
        values,
        join(',\n  '),
        s => `
export const components = {
  ${s}
};`,
        split('\n'),
        Observable.from
      )
    );

const readFixtureExports$ = cwd =>
  readFixtures$(cwd)
    .reduce(
      (acc, {title, type, fixture, fixturePath}) => set([type, title, fixture], fixturePath, acc),
      {}
    )
    .concatMap(
      pipe(
        mapValuesWithKey((titles, type) => {
          return pipe(
            mapValuesWithKey((fixtures, title) => {
              return pipe(
                keys,
                map(fixture => `${fixture}: ${title}Fixture${fixture}`),
                join(',\n      '),
                s => `${title}: {\n      ${s}\n    }`
              )(fixtures);
            }),
            values,
            join(',\n    '),
            s => `${type}: {\n    ${s}\n  }`
          )(titles);
        }),
        values,
        join(',\n  '),
        s => `
export const fixtures = {
  ${s}
};`,
        split('\n'),
        Observable.from
      )
    );

const readStorybookIndex$ = (cwd, target) =>
  Observable.of(
    Observable.of('/* eslint-disable max-len */', ''),
    readComponentImports$(cwd, target),
    readFixtureImports$(cwd, target),
    readComponentExports$(cwd, target),
    readFixtureExports$(cwd, target)
  ).concatAll();

module.exports.readStorybookIndex$ = readStorybookIndex$;

if (!module.parent) {
  const {resolve} = require('path');
  const target = resolve(process.cwd(), process.argv.pop());
  const cwd = resolve(process.cwd(), process.argv.pop());
  readStorybookIndex$(cwd, target).subscribe(
    line => process.stdout.write(`${line}\n`),
    console.error
  );
}
