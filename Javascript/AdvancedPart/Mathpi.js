const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const chandu = {
    name: 'chandu',
    isAvilable : true,
    sallery : "75000",

    hireEmploy: function(){
        console.log('chandu kaam krega')
    }
}
console.log(Object.getOwnPropertyDescriptor(chandu, 'chandu'))

Object.defineProperty(chandu, 'chandu', {
    writable : false,
    enumerable : false,
})

console.log(Object.getOwnPropertyDescriptor(chandu, "Chandu"));

for (const [key, value] of Object.entries(chandu)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}