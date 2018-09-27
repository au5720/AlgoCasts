// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  
  return str.split('').reduce( (rev, char) => char + rev, '');
}

module.exports = reverse;

// function reverse(str) {
//   let returnStr='';
//   for(let x=str.length-1; x >=0; x--){
//     returnStr+=str[x];
//   }
//   return returnStr; 
// }

// function reverse(str) {
//   let returnStr='';
//   for(let x=0; x < str.length; x++){
//     returnStr=str[x] + returnStr;
//   }
//   return returnStr; 
// }

// function reverse(str) {
//   let reversed='';
//   for(let character of str){
//     reversed=character + reversed;
//   }
//   return reversed;
// }
