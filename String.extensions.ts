declare global {
  interface String {
    padZero(length: number): string;
    padStart(length: number): string;
    padEnd(length: number): string;
    toTitleCase(): string;
  }
}

String.prototype.toTitleCase = function () {
  return String(this)
    .split('\\s+')
    .map((word) => word[0]?.toUpperCase() + word.substring(1))
    .join('\\s+');
};

String.prototype.padStart = function (length: number) {
  let spaces = '';
  for (let i = 0; i < length; i++) spaces += ' ';
  return spaces + String(this);
};

String.prototype.padEnd = function (length: number) {
  let ret = String(this);
  for (let i = 0; i < length; i++) ret += ' ';
  return ret;
};

export {};
