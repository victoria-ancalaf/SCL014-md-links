const readMd = require("./readFile");
const path = require("path");

const absolutePath = (ruta) => {
  const pathIsAbsolute = path.isAbsolute(ruta);
  if (pathIsAbsolute === true) {
    readMd(ruta);
  } else {
    const resolvePath = path.resolve(ruta);
    const normalizedPath = path.normalize(resolvePath);
    readMd(normalizedPath);
  }
};

module.exports = absolutePath;
