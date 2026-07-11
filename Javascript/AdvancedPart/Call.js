function SetUsername(username){
    // complex DB call
    this.username = username
    console.log("Called");
}

function CreatUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chandu = new CreatUser("Ayush", "Ayush@gmail.com", "1234")
console.log(chandu)
