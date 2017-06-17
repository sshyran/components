import {Writable} from 'stream';
import {join} from 'path';
import test from 'ava';
import createComponentIndexStream from '../component-index';

test('should', t => {
  const cwd = join(__dirname, 'fixtures');
  const target = join(__dirname, 'index.js');
  const expected = ["export Title from './fixtures/atom/title';\n"];
  return new Promise((resolve, reject) =>
    createComponentIndexStream(cwd, target)
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
