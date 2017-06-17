import {Transform} from 'stream';
import {join} from 'path';
import _join from 'lodash/fp/join';
import camelCase from 'lodash/fp/camelCase';
import last from 'lodash/fp/last';
import pipe from 'lodash/fp/pipe';
import slice from 'lodash/fp/slice';
import split from 'lodash/fp/split';
import upperFirst from 'lodash/fp/upperFirst';
import createComponentFileStream from './component-files';

const pascalCase = pipe(camelCase, upperFirst);

const createComponentStream = cwd => {
  const parseFilePath = pipe(split('/'), slice(0, -1), folders => {
    const title = pipe(last, pascalCase)(folders);
    const type = pipe(slice(0, -1), _join('-'), pascalCase)(folders);
    const path = join(cwd, ...folders);

    return {
      title,
      type,
      path
    };
  });

  return createComponentFileStream(
    cwd,
    '**/+(atom|molecule|organism|template)/**/!(test|layout)/**/index.js'
  ).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        callback(null, parseFilePath(chunk));
      }
    })
  );
};

export default createComponentStream;

if (!module.parent)
  createComponentStream(process.cwd())
    .pipe(
      new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
          callback(null, `${JSON.stringify(chunk, null, 4)}\n`);
        }
      })
    )
    .pipe(process.stdout);
