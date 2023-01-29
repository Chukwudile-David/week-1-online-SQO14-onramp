function countTruthy(arr) {
    count = 0;
      for(let elem of arr) {
          if(elem) {
            count++;
          }
      }
    return count
  }
  console.log(countTruthy([6, 3, 0, 30, 7]))
module.exports = countTruthy