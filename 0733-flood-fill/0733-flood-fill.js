/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  
  if (image[sr][sc] === color) {
    return image;
  }
  
  var oldColor = image[sr][sc];
  var lastRow = image.length - 1;
  var lastCol = image[0].length - 1;
  
  var changeColor = function(row, col) {
    if (row < 0 || col < 0 || row > lastRow || col > lastCol) {
      return;
    }

    if (image[row][col] === oldColor) {
      image[row][col] = color;
      changeColor(row - 1, col);
      changeColor(row, col + 1);
      changeColor(row + 1, col);
      changeColor(row, col - 1);  
    } else {
      return;
    }
    
  };
  
  changeColor(sr, sc);
  return image;
};