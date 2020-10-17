function alphanumeric(string) {
  if (/^[a-z0-9-\'_\.,:\(\)&\[\]\/+=\?#@]+$/i.test(string)) {
    return true;
  }
  return false;
}