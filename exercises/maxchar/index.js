// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap={};
  let max=0;
  let maxChar='';

  for(let char of str) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char]=1;
    }
  }

  for(let char in charMap) {
    if(charMap[char] > max) {
      max=charMap[char];
      maxChar=char;
    }
  }
  return maxChar;
}

module.exports = maxChar;


// function maxChar(str) {
//   let arr=str.split('');
//   let obj={};
//   arr.map(v => obj[v] = obj[v] ? obj[v] + 1: 1);
//   let keys=Object.keys(obj);
//   let vals=Object.values(obj);
//   let biggest=vals.reduce( (a,v) => a > v ? a : v, 0);
//   return keys[vals.indexOf(biggest)];
// }
