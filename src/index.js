module.exports = function reverse (n) {
  if (n < 0) {
        n *=-1
    }
    let arrNum = n.toString().split('').reverse().join('');
    return arrNum;
}
