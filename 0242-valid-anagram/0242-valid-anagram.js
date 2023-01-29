/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  if (s.length !== t.length) {
    return false;
  }

  var sArray = s.split("");
  var tArray = t.split("");
  
  sArray.sort();
  tArray.sort();

  for (var i = 0; i < sArray.length; i++) {
          if (sArray[i] !== tArray[i]) {
              return false;
          }
  }

    return true;
    
};