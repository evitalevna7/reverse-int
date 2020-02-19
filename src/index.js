module.exports = function reverse (n) {
  const str = String(n);
  let result = '';
  if (str[0] === '-') {
    result = str.substr(1).split('').reverse().join('');
  } else {
      result = str.split('').reverse().join('');
  }
  
  return Number(result);
}
