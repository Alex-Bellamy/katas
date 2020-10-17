function kebabize(str) {
  let conversion = str.replace(/([A-Z0-9])/g, '-$1').toLowerCase();
  let removeNumbers = conversion.replace(/\d+/g,'')
  let removeDoubleHyphen = removeNumbers.replace(/--/g, '-')
  return removeDoubleHyphen
}