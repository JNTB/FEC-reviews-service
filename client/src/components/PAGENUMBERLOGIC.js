function pageNumbers(maxpages, current) {
  var result = [];
  if (current === 1) {
    result.push(current, current + 1, current + 2, "...", maxpages, "❯");
  } else if (current === 2) {
    result.push("❮", current - 1, current, current + 1, "...", maxpages, "❯");
  } else if (current === 3) {
    result.push(
      "❮",
      current - 2,
      current - 1,
      current,
      current + 1,
      "...",
      maxpages,
      "❯"
    );
  } else if (current === 4) {
    result.push(
      "❮",
      current - 3,
      current - 2,
      current - 1,
      current,
      current + 1,
      "...",
      maxpages,
      "❯"
    );
  } else if (current === maxpages - 3) {
    result.push(
      "❮",
      maxpages - (maxpages - 1),
      "...",
      current - 1,
      current,
      current + 1,
      current + 2,
      maxpages,
      "❯"
    );
  } else if (current === maxpages - 2) {
    result.push(
      "❮",
      maxpages - (maxpages - 1),
      "...",
      maxpages - 3,
      maxpages - 2,
      maxpages - 1,
      maxpages,
      "❯"
    );
  } else if (current === maxpages - 1) {
    result.push(
      "❮",
      maxpages - (maxpages - 1),
      "...",
      maxpages - 2,
      maxpages - 1,
      maxpages,
      "❯"
    );
  } else if (current === maxpages) {
    result.push(
      "❮",
      maxpages - (maxpages - 1),
      "...",
      maxpages - 2,
      maxpages - 1,
      maxpages
    );
  } else {
    result.push(
      "❮",
      maxpages - (maxpages - 1),
      "...",
      current - 1,
      current,
      current + 1,
      "...",
      maxpages,
      "❯"
    );
  }
  return result;
}

module.exports = pageNumbers;
