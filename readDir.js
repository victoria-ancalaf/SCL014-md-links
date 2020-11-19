const fs = require("fs");
const absolutePath = require("./absolutePath");
const ruta = __dirname;

const readDirectory = () => {
  fs.readdir(ruta, (err, files) => {
    if (err) {
      console.log("No es posible leer el directorio: " + err);
    } else {
      const filterMd = files.filter((x) => x.includes(".md"));
      filterMd.forEach((archivo) => {
        absolutePath(archivo);
      });
      console.log(files);
    }
  });
};

module.exports = readDirectory;
