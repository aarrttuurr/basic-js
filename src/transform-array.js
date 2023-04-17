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
function transform(arr) {
  return 
}

function transform(arr) {
  return arr.filter((item, i, ar) => ar[i + 1] !== '--discard-prev' && (ar[i] !== '--discard-prev' /*&& ar.indexOf('--discard-prev') === 0*/));
}

console.log(transform([1, 2, 3, '--discard-prev', 4, 5]))

console.log(transform(['--discard-prev', 1, 2, 3, 4, 5]))

module.exports = {
  transform
};
