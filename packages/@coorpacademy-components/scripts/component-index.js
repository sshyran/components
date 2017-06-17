import {Transform} from 'stream';
import {relative, resolve, dirname} from 'path';
import createComponentStream from './components';

const createComponentIndexStream = (cwd, target) => {
  return createComponentStream(cwd).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        const {title, path} = chunk;
        const relativePath = relative(dirname(target), path);
        const line = `export ${title} from './${relativePath}';\n`;
        callback(null, line);
      }
    })
  );
};

export default createComponentIndexStream;

if (!module.parent) {
  const target = resolve(process.argv.pop());
  const cwd = resolve(process.argv.pop());
  createComponentIndexStream(cwd, target).pipe(process.stdout);
}
