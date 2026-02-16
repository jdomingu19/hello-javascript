// Intermediate JavaScript Course @mouredev
// Class 79 - Regex (Regular Expressions) Exercises

// 1. Create a RegEx that validates emails (user@domain.extension)
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// ^ y $             : start and end of the chain (so that the entire email matches)
// [A-Za-z0-9._%+-]+ : any combination of letters, digits and some symbols allowed in the user part
// @                 : required character.
// [A-Za-z0-9.-]+    : domain (letters, digits, periods and dashes)
// \.[A-Za-z]{2,}    : extension with at least 2 letters (e.g. .com, .org, .io)

const email1 = "some@email.com";
const email2 = "some123@email.org";
const email3 = "@some.123@email.io@";
const email4 = "some123.email.edu";

console.log(emailRegex.test(email1)); // true
console.log(emailRegex.test(email2)); // true
console.log(emailRegex.test(email3)); // false
console.log(emailRegex.test(email4)); // false

// 2. Create a RegEx to obtain Hashtags from a Text
const hashtagsRegex = RegExp(/#[A-Za-z0-9_]+/g);

const text1 =
  "Aliquip nulla laboris eiusmod sit qui sint. #lorem #ipsum #javascript";
const text2 =
  "Id enim dolore non occaecat magna dolore Lorem aute minim sit dolor sint. #jdomingu19 #mouredev";
const text3 =
  "Non deserunt qui eiusmod in culpa ut minim esse. #JAVASCRIPT #UPPERCASE";
const text4 =
  "Nostrud exercitation ullamco ex ipsum sit nulla aute esse. #snake_case #abc_123";
const text5 =
  "Amet minim pariatur non dolor dolor reprehenderit do ullamco sint ut sunt. #123 #numbers";
const text6 = "Non sint id voluptate mollit sit officia esse irure deserunt.";

console.log(hashtagsRegex.test(text1)); // true
console.log(hashtagsRegex.test(text2)); // true
console.log(hashtagsRegex.test(text3)); // true
console.log(hashtagsRegex.test(text4)); // false

console.log(text1.match(hashtagsRegex)); // [ '#lorem', '#ipsum', '#javascript' ]
console.log(text2.match(hashtagsRegex)); // [ '#jdomingu19', '#mouredev' ]
console.log(text3.match(hashtagsRegex)); // ["#JAVASCRIPT", "#UPPERCASE"];
console.log(text4.match(hashtagsRegex)); // [ '#snake_case', '#abc_123' ]
console.log(text5.match(hashtagsRegex)); // [ '#123', '#numbers' ]
console.log(text6.match(hashtagsRegex)); // null

// 3. Create a RegEx that validates strong passwords (minimum 8 characters, at least one letter and one number)
const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const password1 = "abc";
const password2 = "123";
const password3 = "abcdefgh";
const password4 = "12345678";
const password5 = "a1b2c3d4e5f6g7h8";
const password6 = "6b3a55e0261b0304143f805a24924";

console.log(strongPasswordRegex.test(password1)); // false
console.log(strongPasswordRegex.test(password2)); // false
console.log(strongPasswordRegex.test(password3)); // false
console.log(strongPasswordRegex.test(password4)); // false
console.log(strongPasswordRegex.test(password5)); // true
console.log(strongPasswordRegex.test(password6)); // true
