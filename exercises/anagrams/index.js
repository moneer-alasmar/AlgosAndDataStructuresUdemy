// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const stringOne = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const stringTwo = stringB.replace(/[^\w]/g, "").toLowerCase();
//   const charMapA = {};
//   const charMapB = {};
//   if (stringOne.length !== stringTwo.length) {
//     return false;
//   } else {
//     for (let char of stringOne) {
//       if (charMapA[char]) {
//         charMapA[char]++;
//       } else {
//         charMapA[char] = 1;
//       }
//     }
//     for (let char of stringTwo) {
//       if (charMapB[char]) {
//         charMapB[char]++;
//       } else {
//         charMapB[char] = 1;
//       }
//     }
//   }
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// ----------

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// ---------
