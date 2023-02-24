/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let string = digits.join('');
  let num = BigInt(string) + BigInt(1);
  let result = num.toString().split('').map(Number);
  return result;
};