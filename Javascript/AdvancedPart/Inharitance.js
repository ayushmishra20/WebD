class user{
    constructor(username){
        this.username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chandu = new Teacher("ayush", "Ayush@google.com", "12345")
chandu.logMe()

const NewMemb = new user("NewMemb")
NewMemb.logMe()

console.log(chandu instanceof user);