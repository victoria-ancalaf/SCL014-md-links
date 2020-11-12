const readingFile = require('./readFile');
const path = require("path");

const absolutePath = (ruta) => {
  path.isAbsolute(ruta);
  console.log(path.isAbsolute(ruta));
  if (ruta === true){
    readingFile(ruta);
  } else {
    path.resolve(ruta);
    console.log(path.resolve(ruta));
    path.normalize(ruta);
  }

  // if (fs.existsSync('/etc/passwd')) {
  //   console.log('The path exists.');
  // }
};


module.exports = absolutePath;