// let myname = "AyushMishra   "
// let lastname = "Mishra       "

// coanole.log(myname.truelength);

let myHeros = ['IronMan', 'Thor', 'Spidy']
console.log(myHeros)

let HeroPower = {
    IronMan : "Genius",
    Thor : "Hammer",
    Spidy : "Webs",

    getSpiderPwer : function(){
        console.log(`Ayush is Wanted to be ${this.IronMan}`)
    }
}

Object.prototype.ayush = function(){
    console.log(`Ayush is present in all Ojects`);

}

Array.prototype.heyAyush = function(){
    console.log(`Ayush says Hello`)
}

HeroPower.ayush()
myHeros.heyAyush()

// Inharitance 

const Teacher = {
    makevideo : true
}
const user = {
    name : "Chandu",
    email : "chandu@google.com"
}

const TeacherAssistant = {
    isAvilavle = false,
}

const TASupport = {
    makeAssitant = "js Assistant",
    fulltime : true,
    __proto__ : TeacherAssistant
}

Teacher.__proto__ = user

// Modern Syntax 

Object.setPrototypeOf(TeacherAssistant, Teacher)

let anotherUser = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()