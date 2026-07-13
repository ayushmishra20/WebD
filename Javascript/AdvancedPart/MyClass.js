class User {
    constructor(usernam, email, password){
        this.username = usernam;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password.toUpperCase()}Ayush`
    }
    changeName(){
        return `${this.username.toUpperCase()}`
    }
    changeEmail(){
        return `${this.email.toUpperCase()}`
    }
}

const chandu = new User("chandnichawk", 'chandani@chwak.com', '1234321')
console.log(chandu.changeEmail())

// Behind scen

User.prototype.encryptPassword() = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName() = function(){
    return `${this.email.toUpperCase()}`
}
const newUser = User('newuser', 'Ayush.Gogole.com', '12344321')
console.log(newUser.encryptPassword());
console.log(newUser.changeUserName());