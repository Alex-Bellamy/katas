function isValidIP(str) {
  const ipSection = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
  const checkIpAddress = new RegExp(`^${ipSection}\\.${ipSection}\\.${ipSection}\\.${ipSection}$`);
  return checkIpAddress.test(str);
}