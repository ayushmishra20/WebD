const User = {
    _email: 'am@google.com',
    _passeord: '1234',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const chandu = Object.create(User)
console.log(chandu.email)
