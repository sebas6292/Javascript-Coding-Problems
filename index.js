// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Javascript Coding Problems</h1>`;

// Question 1 : reverse a number;

const reverseNum = (num) => {
  let revNum = num.toString().split('').reverse().join('');
  return revNum;
};

// const reverseNum = (num) => {
// return num.toString().split('').reverse().join('')
// }

// console.log(reverseNum(123456));

// Question 2 : is it a palindrome or not(recieves a boolean)

const isPalindrome = (string) => {
  let reverseString = string.split('').reverse().join('');
  return string === reverseString;
};

// const isPalindrome = (string) => {
//   let revString = string.split('').reverse().join('');
//   if (string === revString) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrome('racecar'));

// Question 3 : generate all possible combinations of a string; (ex. string = 'dog' .... answer = 'd', 'do', 'dog', 'o', 'og', 'g' )

const stringCombinations = (str) => {
  const combos = [];

  for (let i = 0; i < str.length; ++i) {
    for (let j = i + 1; j < str.length + 1; ++j) {
      combos.push(str.slice(i, j));
    }
  }

  return combos;
};
// console.log(stringCombinations('dog'));

// Question 4 : return a string in alphabetical order

const alphabtizeInOrder = (string) => {
  return string.split('').sort().join('');
};
// console.log(alphabtizeInOrder('webmaster'));

// Question 5 : return the first index of each word to be uppercase

const capitalize = (sentence) => {
  let newSentence = [];

  sentence.split(' ').forEach((word) => {
    newSentence.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return newSentence.join(' ');
};
// console.log(capitalize('the quick brown fox'));

function capital(sentence) {
  let word = sentence.split(' ');
  let realSentence = [];
  for (let letter of word) {
    letter = letter[0].toUpperCase() + letter.slice(1);
    realSentence.push(letter);
  }
  return realSentence.join(' ');
}
// console.log(capital('another sentence that works with this function'));

// Question 6 : find the longest word in a string

const longestWord = (sentence) => {
  let words = sentence.split(' ');
  let longWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }
  return longWord;
};
// console.log(longestWord('Web Development Tutorial'));

function longWord(sentence) {
  let words = sentence.split(' ');
  let longestWord = '';
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
// console.log(longWord('Web Development Tutorial'));

// Question 7 : count all the vowels in a sentence

const vowelCount = (sentence) => {
  let vowels = 'aeiou';
  let count = 0;

  let letters = sentence.split('');
  letters.forEach((letter) => {
    if (vowels.includes(letter)) {
      count++;
    }
  });
  return count;
};
// console.log(vowelCount('How many vowels are in this sentence'));

function countVowels(sentence) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let letters = sentence.split('');
  let count = 0;

  for (let i of letters) {
    if (vowels.includes(i)) {
      count = count + 1;
      // count += 1;
      // count++
    }
  }
  return count;
}
// console.log(countVowels('How many vowels are in this sentence'));

// Question 8 : check if the number is a prime (boolean)
// 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
// console.log(isPrime(15));

// Question 9 : accepts an argument and returns a type(boolean, num, string, function, object, undefined)

const checkType = (type) => {
  return typeof type;
};

// console.log(checkType({}));

// Question 10 : returns the n rows by n columns identity matrix
const rows = (num) => {
  let columns = [];
  for (let i = 0; i < num; i++) {
    columns[i] = [];
    for (let j = 0; j < num; j++) {
      columns[i][j] = [];
    }
  }
  return columns;
};
// console.log(rows(1));

// Question 11 : takes an array of numbers stored and find the second lowest and second greatest numbers, respectively;use the sort() method(w3schools)

const second_lowest_greatest = (array) => {
  let sorted = array.sort((a, b) => a - b);

  return [sorted[1], sorted[sorted.length - 1]];
};
// console.log(second_lowest_greatest([10, 2, 13, 44, 25]));

// Question 12 : find the perfect number (6) = factors of 6 are 1, 2, 3, 6. and is easily divisible by 2. = 1 + 2 + 3 + 6 = 12 / 2 = 6

const perfectNum = (num) => {
  let factorsNum = 0;

  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factorsNum += i / 2;
    }
  }

  return factorsNum;
};
// console.log(perfectNum(6));

function isPerfectNum(num) {
  let factors = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  if (factors.reduce((sum, a) => sum + a, 0) === num) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPerfectNum(6))

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

const largestPair = (array) => {
  let highest = array[0] * array[1];
  for (let i = 0; i <= array.length; i++) {
    const product = array[i] * array[i + 1];
    if (highest < product) {
      highest = product;
    }
  }
  return highest;
};

// console.log(largestPair([1, 2, 3, 4, 5, 6]));

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// const twoSumPair = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; i++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; i++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
// console.log(twoSum([1, 2, 3, 4, 5, 6], 12));

//return the length of the last word

const lengthOfLastWord = (str) => {
  let words = str.split(' ');
  let lastWord;
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      lastWord = words[i];
    }
  }
  return lastWord.length;
};
// console.log(lengthOfLastWord('Hello Worlds'));

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const phraseIsPalindrome = (str) => {
  let string = str.split(' ').join('').toLowerCase();
  let string2 = string.split('').reverse().join('');

  return true ? string === string2 : false;
};

// console.log(phraseIsPalindrome('A man a plan a canal Panama'));

// reverse an array

const reverseArray = (array) => {
  let reversed = [];

  for (let i = 0; i < array.length; i++) {
    reversed.unshift(array[i]);
  }
  return reversed;
};
// const reverseArray = (array) => {
//   let reversed = [];

//   for ( let i = array.length - 1; i >= 0; i--) {
//     reversed.push(array[i])
//   }
//   return reversed;
// }
// const sentence = ['sense', 'make', 'will', 'This']
// console.log(reverseArray(sentence))

// count the reoccurence of an item
const array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

// const occurrences = array.reduce(function (acc, curr) {
//   return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
// }, {});

const occurences = array.reduce((acc, curr) => {
  return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
}, {});

// console.log(occurences);
