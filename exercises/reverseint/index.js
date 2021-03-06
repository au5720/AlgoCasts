// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let arr=(n + '').split('');
  if(n < 0 ) {
    arr=arr.slice(1);
  } 
  return Number( (n < 0 ? '-' : '') + arr.reverse().join(''));
}

module.exports = reverseInt; 
