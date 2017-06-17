import {Writable} from 'stream';
import {join} from 'path';
import test from 'ava';
import createComponentStream from '../components';

test('should', t => {
  const cwd = join(__dirname, 'fixtures');
  const expected = [{title: 'Title', type: 'Atom', path: join(cwd, 'atom/title')}];
  return new Promise((resolve, reject) =>
    createComponentStream(cwd)
      .pipe(
        new Writable({
          objectMode: true,
          write(chunk, encoding, callback) {
            t.deepEqual(chunk, expected.shift());
            callback(null);
          }
        })
      )
      .on('finish', resolve)
      .on('error', reject)
  );
});
