function isPangram(string){
  const checkIfPangram = /([a-z])(?!.*\1)/g
  return (string.match(checkIfPangram) || "").length == 26
}