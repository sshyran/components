import {Writable} from 'stream';
import {join} from 'path';
import test from 'ava';
import createStorybookIndexStream from '../storybook-index';

test('should', t => {
  const cwd = join(__dirname, 'fixtures');
  const target = join(__dirname, 'index.js');
  const expected = `/* eslint-disable max-len */

import Title from '../fixtures/atom/title';

import TitleFixtureDefault from '../fixtures/atom/title/test/fixtures/default';

export const components = {
  Atom: {
    Title
  }
};

export const fixtures = {
  Atom: {
    Title: {
      Default: TitleFixtureDefault
    }
  }
}`.split('\n');
  return new Promise((resolve, reject) =>
    createStorybookIndexStream(cwd, target)
      .pipe(
        process.stdout
        // new Writable({
        //   write(chunk, encoding, callback) {
        //     t.deepEqual(chunk.toString(), expected.shift());
        //     callback(null);
        //   }
        // })
      )
      .on('finish', resolve)
      .on('error', reject)
  );
});
