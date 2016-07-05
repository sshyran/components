const fs = require('fs');
const path = require('path');
const {
  writeImports,
  writeExports,
  extractComponents
} = require('./components-finder');

const reset = index => {
  const title = '/* Generated by src/util/generate-bundle.js */\n\n';
  fs.writeFileSync(index, title);
};

const generate = () => {
  const index = path.join(__dirname, '../components/index.js');
  const includes = '{behaviour,molecule,organism}';
  const elements = extractComponents(includes, true);

  const _imports = `${writeImports(elements)}\n`;
  const _exports = `\nexport {\n${writeExports(elements)}\n};\n`;

  reset(index);
  fs.appendFileSync(index, _imports);
  fs.appendFileSync(index, _exports);
};

if (require.main === module) {
  generate();
}
else {
  module.exports = {
    generate
  };
}
