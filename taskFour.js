
let word = prompt("Enter a word:");

let isPalindrome = true;

for (let i = 0; i < word.length / 2; i++) {

  if (word[i] != word[word.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("The string is a palindrome.");
} else {
  console.log("The string is not a palindrome.");
}

