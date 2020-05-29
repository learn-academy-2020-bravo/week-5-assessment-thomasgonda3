// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const coded = (string) => {
  return string.split('').map((value) => {
    if (value == 'a') return '4'
    else if (value == 'e') return '3'
    else if (value == 'i') return '1'
    else if (value == 'o') return '0'
    else return value
  }).join('')
}

console.log(coded(secretCodeWord1));
console.log(coded(secretCodeWord2));


// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const hasA = (array) => {
  //filter for strings that do not contain 'a'.
  //use .toLowerCase to catch 'Apple'
  return array.filter((value) => {
    return value.toLowerCase().includes('a')
  })
}

console.log(hasA(arrayOfWords))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const isFullHouse = (array) => {
  let hash = {}
  //build a hash with the amount of occurances of each card
  for (let i of array)  {
    if (hash[i] == null) hash[i] = 0;
    hash[i]++;
  }

  //return false if the amount of a specific card is not 2 or 3.
  for (const key in hash) {
    if (hash[key] != 2 && hash[key] != 3) return false;
  }

  //return true is there a specific card that appears 3 times, and a different specific card that appears 2 times.
  return true;
}

console.log(isFullHouse(hand1))
console.log(isFullHouse(hand2))
console.log(isFullHouse(hand3))
