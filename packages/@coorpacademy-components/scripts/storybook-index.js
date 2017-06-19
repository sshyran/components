import {Readable, Writable, Transform} from 'stream';
import {relative, _resolve, dirname} from 'path';
import createComponentStream from './components';

class ConcatStream extends Readable {
  constructor(...streams) {
    super();
    this._streams = streams;
  }

  read(size) {
    if (this._stream) return this._stream.read(size);

    this._stream = this._streams.shift();

    if (!this._stream) return this.push(null);

    const push = (...args) => this.push(...args);
    this._stream
      .pipe(
        new Writable({
          write(chunk, encoding, callback) {
            push(chunk, encoding);
            callback(null);
          }
        })
      )
      .on('finish', () => {
        this._stream = null;
      })
      .on('error', err => this.emit('error', err));
  }
}

const createComponentIndexStream = (cwd, target) => {
  return new ConcatStream(
    createComponentStream(cwd).pipe(
      new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
          const {title, path} = chunk;
          const relativePath = relative(dirname(target), path);
          const line = `export ${title} from './${relativePath}';\n`;
          callback(null, line);
        }
      })
    ),
    createComponentStream(cwd).pipe(
      new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
          const {title, path} = chunk;
          const relativePath = relative(dirname(target), path);
          const line = `export ${title} from './${relativePath}';\n`;
          callback(null, line);
        }
      })
    )
  );
};

export default createComponentIndexStream;

if (!module.parent) {
  const target = _resolve(process.argv.pop());
  const cwd = _resolve(process.argv.pop());
  createComponentIndexStream(cwd, target).pipe(process.stdout);
}
