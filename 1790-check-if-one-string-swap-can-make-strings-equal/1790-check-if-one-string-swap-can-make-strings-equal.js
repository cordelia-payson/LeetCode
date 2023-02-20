/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  if (s1 === s2) return true;
  
  let diff = 0;
  let match = 0;

  let indeces = [];
  
  for (var i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i] && !indeces.includes(i)) {
      diff++;
      for (var j = i + 1; j < s2.length; j++) {
        if (s2[j] === s1[i] && s2[i] === s1[j]) {
          match++;
          indeces.push(j);
        }
      }
    }
  }
  
  if (diff === 1 && match === 1) {
    return true;
  } else {
    return false;
  }
};