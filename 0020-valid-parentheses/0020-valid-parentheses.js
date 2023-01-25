/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  
  if (s[0] === ')' || s[0] === ']' || s[0] === '}') {
    return false;
  }
  if (s.length % 2 === 1) {
    return false;
  }
  if (s[s.length - 1] === '(' || s[s.length - 1] === '[' || s[s.length - 1] === '{') {
    return false;
  }
  
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    }
    if (s[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    }
    if (s[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        return false;
      }
    }
    if (s[i] === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
