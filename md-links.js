const readDirectory = require("./readDir");
const absolutePath = require("./absolutePath");
const fs = require("fs");

// Revisar si es file or directory
const readingRoute = (file) => {
    const fileOrDirectory = fs.statSync(file);
    if (fileOrDirectory.isFile()) {
        absolutePath(file);
    } else if (fileOrDirectory.isDirectory()) {
      readDirectory(file);
    } else {
      console.log("Por favor, verificar ruta");
    }
  };

module.exports = readingRoute;