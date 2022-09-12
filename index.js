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
console.log(reverseNum(123456));

// Question 2 : is it a palindrome or not(recieves a boolean)

const isPalindrome = (string) => {
  let reverseString = string.split('').reverse().join('');
  return string === reverseString;
};
console.log(isPalindrome('racecar'));

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
console.log(stringCombinations('dog'));

// Question 4 : return a string in alphabetical order

const alphabtizeInOrder = (string) => {
  return string.split('').sort().join('');
};
console.log(alphabtizeInOrder('webmaster'));

// Question 5 : return the first index of each word to be uppercase

const capitalize = () => {

}
console.log(capitalize('the quick brown fox'))
