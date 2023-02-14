/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let min;
  let max;
  
  let total = 0;
  
  for (var i = 0; i < salary.length; i++) {
    if (!min) min = salary[i];
    if (!max) max = salary[i];
    min = Math.min(salary[i], min);
    max = Math.max(salary[i], max);
    total+= salary[i];
  }
  
  total = total - min;
  total = total - max;
  
  let result = total / (salary.length - 2);
  return result;
  
};