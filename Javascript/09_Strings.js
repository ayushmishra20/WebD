let name = "Ayush"
let NewScore = 50

console.log(`Hello ${name} your new Score is ${NewScore}`);

const gamename = String('Ayush-am-com')
console.log(gamename[0])
console.log(gamename.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))