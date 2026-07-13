class User{
    constructor(){
        this.username = username 
    }
    logMe(){
        console.log(`User ${this.username}, is loggedIn`)
    }

    static createId(){
        return `1234`
    }
}
const Ayush = new User('Ayush')
console.log(Ayush.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone','iphone@apple.com')
console.log(iphone.createId());