
let word = prompt("Enter a string:");

let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {

  reversed = reversed + word[i];

}

console.log("Original string: " + word);
console.log("Reversed string: " + reversed);

