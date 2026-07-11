const user = {
    username: "Ayush",
    Email: "aysuh@gmail.com",
    loginCount:12,
    password: "!@#4$%",
    signedIn: true,

    getuserdetails : function(){
        console.log("Get user details form database.")
        console.log(`Username : ${this.username}`)
        console.log(this);
    }

}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

console.log(username, loginCount, isLoggdin)
    this.username = username;
    this.loginCount = 8;
    this.isLoggdin = isLoggdin;


    this.gretings = function(){
        console.log(`Welcome user ${this.username}`);

    }
    return this


const user1 = new User("ayush", 12, true);
const user2 = new User("Pragya", 13, false);

console.log(user1.constructor);
console.log(user2)