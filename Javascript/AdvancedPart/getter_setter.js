class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }

    get password(){
        return `${this._password}Ayush`
    }

    set password(value){
        this._password = value

    }
}

const Ayush = new User("Ayush@google.com", '1234')
console.log(Ayush.password)