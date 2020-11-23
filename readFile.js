const regExpUrl = require("./regExp");
const fs = require("fs");
const path = require("path");

const readMd = (file) => {
  fs.readFile(file, "utf8", (err, data) => {
    path.extname(file);
    if (file.includes(".md")) {
      regExpUrl(data, file);
    } else {
      throw err;
    }
  });
};

module.exports= readMd;
