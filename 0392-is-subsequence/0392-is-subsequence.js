/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) {
        return false;
    }
    var currentIndex = 0;

    for (var i = 0; i < t.length; i++) {
        if (t[i] === s[currentIndex]) {
            currentIndex++;
        }
    }
    if (currentIndex === s.length) {
        return true;
    } else {
        return false;
    }
    
};