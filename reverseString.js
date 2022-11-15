const reverseString = (str) => {
  const arr = str.split("");
  const reversed = arr.reverse();
  return reversed.join("");
}

module.exports = reverseString;

// console.log(reverseString('12345'))