const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

/* function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  } else {
    let cpArr = arr.slice();
    for (let i = 0; i < cpArr.length; i++){
      if(cpArr[i + 1] == '--discard-prev') {
        cpArr.splice(i, 2);
      }
      if(cpArr[i] == '--discard-next' && cpArr.indexOf('--discard-next') !== cpArr.length - 1) {
        cpArr.splice(i, 2);
      }
      if(cpArr[i + 1] == '--double-prev') {
        cpArr.splice(i + 1, 1, cpArr[i]);
      }
      if(cpArr[i] == '--double-next' && cpArr.indexOf('--double-next') !== cpArr.length - 1) {
        cpArr.splice(i, 1, cpArr[i + 1]);
      }
    }
    return cpArr;
  }
} */

function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  } else {
    let cpArr = arr.slice();
    for (let i = 0; i < cpArr.length; i++){
      if(cpArr[i] == '--discard-prev') {
        cpArr[i - 1] !== undefined ? cpArr.splice(i - 1, 2) : cpArr.splice(i, 1);
      }
      if(cpArr[i] == '--discard-next' /*&& cpArr.indexOf('--discard-next') !== cpArr.length - 1*/) {
        (cpArr[i + 2] == '--discard-prev' || cpArr[i + 2] == '--double-prev') ? cpArr.splice(i, 3) : 
        cpArr.splice(i, 2)  ;
      }
      if(cpArr[i] == '--double-prev') {
        cpArr[i - 1] !== undefined ? cpArr.splice(i, 1, cpArr[i - 1]) : cpArr.splice(i, 1);
      }
      if(cpArr[i] == '--double-next' /*&& cpArr.indexOf('--double-next') !== cpArr.length - 1*/) {
        cpArr[i + 1] !== undefined ? cpArr.splice(i, 1, cpArr[i + 1]) : cpArr.splice(i, 1);
      }
    }
    return cpArr;
  }
}

module.exports = {
  transform
};
