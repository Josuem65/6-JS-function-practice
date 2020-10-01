// ---------------------
// Define a function max() that takes two numbers as
// arguments and returns the largest of them. Use the
// if-then-else construct available in JavaScript.
// ---------------------
function max(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}
console.assert(max(2, 3))
console.assert(max(23, 24))
console.assert(max(-23, 12))
// ---------------------
// Define a function maxOfThree() that takes three
// numbers as arguments and returns the largest of them.
// ---------------------
let maxOfThree = function (a, b, c) {
  return Math.max(a, b, c)
}
console.assert(maxOfThree(2, 56, 3))
console.assert(maxOfThree(12, 3, 4))
console.assert(maxOfThree(-12, 4, -5))
// ---------------------
// Write a function isVowel() that takes a character (i.e. a
// string of length 1) and returns true if it is a
// vowel, false otherwise.
// ---------------------

function isVowel(a) {
  const vowel = "aeiouAEIOU"
  if (vowel.includes(a)) {
    return true
  } else {
    return "false"
  }
}

console.assert(isVowel(0))
console.assert(isVowel("B"))
console.assert(isVowel("b"))
console.assert(isVowel("a"))
console.assert(isVowel("E"))
console.assert(isVowel("2"))

// ---------------------
// Write a function rovarspraket() that will translate
// a text into "Rovarspraket". That is, double every
// consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return
// the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(a) {
  const consonant = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
  let newString = null
  if (a !== consonant.includes(a)) return "not valid"
  for (let i = 0; i < a.length; i++) {
    if (consonant.includes(a[i])) {
      return (newString = a + "o" + a)
    } else {
      return "false"
    }
  }
}

console.assert(rovarspraket("a"))
console.assert(rovarspraket("b"))
console.assert(rovarspraket("cat"))
console.assert(rovarspraket("javascript"))
console.assert(rovarspraket(0))

// ---------------------
// Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
// ---------------------

// function reverse(a) {
//   let reversed = ""
//   for (let i = a.length - 1; i >= 0; i--) {
//     reversed += a[i]
//   }
//   return reversed
// }

// console.assert(reverse("books"))
// console.assert(reverse("we don't want no trouble"))
