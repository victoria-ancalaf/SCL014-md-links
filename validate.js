const fetch = require("node-fetch");
const { stats, brokenLinks } = require("./stats");
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
    let processArgv = {
      validate: false,
      stats: false,
    };

    if (process.argv.length > 2) {
      process.argv.forEach((element) => {
        if (element === "--validate") {
          processArgv.validate = true;
        }
        if (element === "--stats") {
          processArgv.stats = true;
        }
      });
    }

    if (processArgv.stats === true  && processArgv.validate === false) {
      const getStats = stats(resp);
      console.log(getStats);
    }

    if (processArgv.validate === true && processArgv.stats === true) {
      const getBroken = brokenLinks(resp);
      console.log(getBroken);
    }

    resp.forEach((element) => {
      if (processArgv.validate) {
        console.log(
          `${chalk.blackBright(element.file)} ${chalk.magentaBright(
            element.link
          )} ${chalk.greenBright(element.status_text)} ${chalk.cyanBright(
            element.status_code
          )} ${chalk.blackBright(element.text)}`
        );
      } else {
        console.log(
          `${chalk.blackBright(element.file)} ${chalk.magentaBright(
            element.link
          )}`
        );
      }
    });
  });
};
