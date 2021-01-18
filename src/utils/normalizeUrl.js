export const normalizeUrl = (url) => {
  //check for empty string
  if (url === null) return null
  if (url === '') return null
  if (!url.match(/[\w]+/)) {
    return null;
  } else if (!url.match(/^[a-zA-Z]+:\/\//)) {
    url = 'https://' + url;
  }
  return url;
};

export const validURL = (str) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
};
