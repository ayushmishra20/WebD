//  Objects litrals

const mySym = Symbol("Key1")

const JSuser = {
    name: "Ayush",
    fullname: "Ayush Mishra",
    [mySym]: "mykey1",
    age: 19,
    location: "Obra",
    email: "ayush@google.com",
    isloggedin: false,
    lastloginDays : ["Monday", "Tuesday"]
}

console.log(JSuser.email)
console.log(JSuser[mySym])
console.log(JSuser["email"])
console.log(JSuser["full name"])

JSuser.email = "Ayush@chatgpt.com"
// Object.freeze(JSuser)
JSuser.email = "Ayush@microsoft.com"
console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user");
}

JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());