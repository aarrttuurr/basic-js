const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  /* constructor(arr) {
    this.arr = arr;
    this.count = 1;
  } */

  calculateDepth(arr) {
    /* function getArrayDepth3(a) {
      let count = 1;
      function recurrFun(a) {
        if(JSON.stringify(a) === JSON.stringify(a.flat())) {
          return count;
        } else {
          count++;
          return recurrFun(a.flat());
        }
      }
      recurrFun(a);
      return count;
    }
    return getArrayDepth3(arr); */

    let count = 1;
    function recurrFun(a) {
      if(JSON.stringify(a) === JSON.stringify(a.flat())) {
        return count;
      } else {
        count++;
        return recurrFun(a.flat());
      }
    }
    recurrFun(arr);
    return count;


    /* if(JSON.stringify(arr) === JSON.stringify(arr.flat())) {
      return count;
    } else {
      this.count++;
      arr
      return arr.calculateDepth(arr.flat());
    } */

  }
}

module.exports = {
  DepthCalculator
};
