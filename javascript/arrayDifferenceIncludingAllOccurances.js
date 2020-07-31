function arrayDiff(a, b) {
  var difference = a.filter((item) => !b.includes(item));
  return difference
  }