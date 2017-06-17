import {Transform} from 'stream';
import {join, basename} from 'path';
import _join from 'lodash/fp/join';
import camelCase from 'lodash/fp/camelCase';
import last from 'lodash/fp/last';
import pipe from 'lodash/fp/pipe';
import slice from 'lodash/fp/slice';
import split from 'lodash/fp/split';
import upperFirst from 'lodash/fp/upperFirst';
import createComponentFileStream from './component-files';

const pascalCase = pipe(camelCase, upperFirst);
const removeExt = filename => basename(filename, '.js');

const createComponentFixtureStream = cwd => {
  const parseFilePath = pipe(split('/'), folders => {
    const type = pipe(slice(0, -4), _join('-'), pascalCase)(folders);
    const title = pipe(slice(slice(0, -4, folders).length, -3), _join('-'), pascalCase)(folders);
    const fixture = pipe(last, removeExt, pascalCase)(folders);
    const path = join(__dirname, '..', ...folders);

    return {
      title,
      type,
      fixture,
      path
    };
  });

  return createComponentFileStream(
    cwd,
    '**/+(atom|molecule|organism|template)/**/!(test|layout)/**/test/fixtures/*.js'
  ).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        callback(null, parseFilePath(chunk));
      }
    })
  );
};

export default createComponentFixtureStream;

if (!module.parent)
  createComponentFixtureStream(process.cwd())
    .pipe(
      new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
          callback(null, `${JSON.stringify(chunk, null, 4)}\n`);
        }
      })
    )
    .pipe(process.stdout);
