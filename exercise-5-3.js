//3. Breaking Sentence (Again) using Substring
var word = 'wow JavaScript is so cool';
var firstWord = word.substring(0,3);
var secondWord = word.substring(4, 14); 
var thirdWord = word.substring(15,18);
var fourthWord = word.substring(18,21);
var fiveWord = word.substring(21,26);

console.log('First Word :' + firstWord)
console.log('Second Word :' + secondWord)
console.log('Third Word :' + thirdWord)
console.log('Fourth Word :' + fourthWord)
console.log('Five Word :' + fiveWord)

//4. Breaking Sentence (yet Again) and Count Each Length
var word = 'wow JavaScript is so cool'
var firstWord = word.substring(0,3)
var secondWord = word.substring(4, 14)
var thirdWord = word.substring(15,17)
var fourthWord = word.substring(18,20)
var fiveWord = word.substring(21,25)
console.log('');
// create new variables around here
var FirstWordLength = firstWord.length
var SecondWordLength = secondWord.length 
var ThirdWordLength = thirdWord.length
var FourthWordLength = fourthWord.length
var FiveWordLength = fiveWord.length
console.log('First Word :' + firstWord + ', with length: ' + FirstWordLength)
console.log('Second Word :' + secondWord + ', with length: ' + SecondWordLength)
console.log('Third Word :' + thirdWord + ', with length: ' + ThirdWordLength)
console.log('Fourth Word :' + fourthWord + ', with length: ' + FourthWordLength)
console.log('Five Word :' + fiveWord + ', with length: ' + FiveWordLength)