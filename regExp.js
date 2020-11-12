const validateLinks = require("./validate");

module.exports = (data, file) => {
  const regExpUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gm;
  const arrLinks = [];
  const saveLinks = data.match(regExpUrl);

  saveLinks.forEach((element) => {
    arrLinks.push({ File: file, Link: element });
  });

  validateLinks(arrLinks);
};
