import {Writable} from 'stream';
import {join} from 'path';
import test from 'ava';
import createComponentFileStream from '../component-files';

test('should', t => {
  const expected = ['atom/title/index.js'];

  const cwd = join(__dirname, 'fixtures');
  return new Promise((resolve, reject) =>
    createComponentFileStream(
      cwd,
      '**/+(atom|molecule|organism|template)/**/!(test|layout)/**/index.js'
    )
      .pipe(
        new Writable({
          write(chunk, encoding, callback) {
            t.deepEqual(chunk.toString(), expected.shift());
            callback(null);
          }
        })
      )
      .on('finish', resolve)
      .on('error', reject)
  );
});
