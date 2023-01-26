/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  var replaced = s.replace(/[^0-9a-z]/gi, '');
  var lowercase = replaced.toLowerCase();
  var array = lowercase.split("");
  var lastIndex = array.length - 1;
  
  for (var i = 0; i < array.length; i++) {
    var start = array[i];
      var end = array[lastIndex - i];
      if (start !== end) {
        return false;
      }
  }
  return true;
};