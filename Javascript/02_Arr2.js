const marvel_heros = ["Iron man", "thor", "spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)

console.log(marvel_heros[3][1])

const All_heros = marvel_heros.concat(dc_heros)
console.log(All_heros)

const all_heros = [...marvel_heros, ...dc_heros]

const another_array = [1,2,3,4,5,[4,4,5[1,2,3,45],[32]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Ayush"))
console.log(Array.from("Ayush"))
console.log(Array.from({name: "Ayush"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

