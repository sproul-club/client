const fileNameValid = (function () {
  const rg1 = /^[^\\/:\*\?"<>\|]+$/; // forbidden characters \ / : * ? " < > |
  const rg2 = /^\./; // cannot start with dot (.)
  const rg3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i; // forbidden file names
  return function isValid(fname?: string) {
    if (!fname) return false;
    return rg1.test(fname) && !rg2.test(fname) && !rg3.test(fname);
  };
})();

function isDefined<T>(x: T | null | undefined): x is T {
  return x !== undefined && x !== null && x !== '';
}

export { fileNameValid, isDefined };
