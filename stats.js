const stats = (element) => {
    let statsLinks = element.map(list => list.Link);
    const uniqueLinks = new Set(statsLinks);
    const uniques = Array.from(new Set(uniqueLinks));

    return {
      Total: element.lenght,
      Unique: uniques.lenght,
    };
  };