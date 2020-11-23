const readDirectory = require("./readDir");
const readMd = require("./readFile")
const fs = require("fs");
const path = require("path");

// Revisar si es file or directory
const readingRoute = (file) => {
    const fileOrDirectory = fs.statSync(file);
    if (fileOrDirectory.isFile()) {
        file = absolutePath(file);
        readMd(file)
    } else if (fileOrDirectory.isDirectory()) {
      readDirectory(file);
    } else {
      console.log("Por favor, verificar ruta");
    }
  };

  const absolutePath = (ruta) => {
    const pathIsAbsolute = path.isAbsolute(ruta);
    if (pathIsAbsolute) {
      return ruta;
    } else {
      const resolvePath = path.resolve(ruta);
      const normalizedPath = path.normalize(resolvePath);
     return normalizedPath;
    }
  };


module.exports = readingRoute;