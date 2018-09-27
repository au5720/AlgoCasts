// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let times=Math.floor(str.length / 2);
  let arr=str.split('');
  let test=true;
  for(let x=0; x < times; x++) {
    if(arr.shift() !== arr.pop()){
      return false;
    }
  }
  return test;
}

module.exports = palindrome;


// function palindrome(str) {
//   return str.split('').reverse().join('') === str;
// }

// function palindrome(str) {
//   return str.split('').every( (char, index) => char === str[str.length - 1 - index] );
// }

// function palindrome(str) {
//   let times=Math.floor(str.length / 2);
//   let arr=str.split('');
//   let test=true;
//   for(let x=0; x < times; x++) {
//     if(arr[x] !== arr[arr.length - 1 - x]){
//       return false;
//     }
//   }
//   return test;
// }


