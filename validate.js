const fetch = require("node-fetch");
const chalk = require("chalk");

module.exports = (arrLinks) => {
  const validateLinks = arrLinks.map((element) => {
    return fetch(element.link)
      .then((res) => {
        return {
          file: element.file,
          text: element.text,
          link: res.url,
          status_code: res.status,
          status_text: res.statusText,
        };
      })
      .catch((error) => {
        return {
          file: element.file,
          link: element.link,
          status_code: error.code,
          status_text: error.errno,
        };
      });
  });

  Promise.all(validateLinks).then((resp) => {
    let validateOption = "";
    if (process.argv.length > 3) {
      validateOption = process.argv[3];
    }

    resp.forEach((element) => {
      if (validateOption === "--validate") {
        console.log(
          `${chalk.blackBright(element.file)} ${chalk.magentaBright(
            element.link
          )} ${chalk.greenBright(element.status_text)} ${chalk.cyanBright(
            element.status_code
          )} ${chalk.blackBright(element.text)}`
        );
      } else {
        console.log(
          `${chalk.blackBright(element.file)} ${chalk.magentaBright(element.link)}`
        );
      }
    });
  });
};
