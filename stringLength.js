const stringLength = (str) => {
  if (str.length < 1) {
    throw new Error('The string should be at least 1 character long');
  } else if (str.length > 10) {
    throw new Error('The string should be not longer than 10 characters');
  }
  return str.length;
};

module.exports = stringLength;

// console.log(stringLength('12345678911'))