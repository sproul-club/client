// basically makes sure a function can't be called to often
export const throttle = (callback, limit) => {
  var wait = false;
  return function (...args) {
    if (!wait) {
      callback(...args);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
};
