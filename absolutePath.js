const readingFile = require("./readFile");
const path = require("path");

const absolutePath = (ruta) => {
  const pathIsAbsolute = path.isAbsolute(ruta);
  if (pathIsAbsolute === true) {
    readingFile(ruta);
  } else {
    const resolvePath = path.resolve(ruta);
    const normalizedPath = path.normalize(resolvePath);
    readingFile(normalizedPath);
  }
};

module.exports = absolutePath;
