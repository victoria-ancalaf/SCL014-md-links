module.exports = {
  stats: (element) => {
    let statsLinks = element.map((list) => list.link);
    const uniqueLinks = new Set(statsLinks);
    const uniques = Array.from(new Set(uniqueLinks));
    console.log("=====Stats=====");

    return {
      Total: element.length,
      Unique: uniques.length,
    };
  },

  brokenLinks: (element) => {
    let broken = element.filter((element) => element.status_code >= 400);
    const linksBroken = module.exports.stats(element);

    return {
      Total: linksBroken.Total,
      Unique: linksBroken.Unique,
      Broken: broken.length,
    };
  },
};
