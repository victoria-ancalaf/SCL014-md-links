const fetch = require("node-fetch");
const chalk = require("chalk");

module.exports = (arrLinks) => {
  const validateLinks = arrLinks.map((element) => {
    return fetch(element.Link)
      .then((res) => {
        return {
          File: element.File,
          Link: res.url,
          Status_Code: res.status,
          Status_Text: res.statusText,
        };
      })
      .catch((error) => {
        return {
          File: element.File,
          Link: element.Link,
          Status_Code: error.code,
          Status_Text: error.errno,
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
          `${chalk.blackBright(element.File)} ${chalk.magentaBright(
            element.Link
          )} ${chalk.greenBright(element.Status_Text)} ${chalk.cyanBright(
            element.Status_Code
          )}`
        );
      } else {
        console.log(
          `${chalk.blackBright(element.File)} ${chalk.magentaBright(element.Link)}`
        );
      }
    });
  });
};
