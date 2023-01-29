function countTruthy(arr) {
    count = 0;
      for(let elem of arr) {
          if(elem) {
            count++;
          }
      }
    return count
  }
module.exports = countTruthy