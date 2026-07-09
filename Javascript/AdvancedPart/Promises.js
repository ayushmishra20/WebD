const promiseOne = new Promise(function(resolve, reject){
    // Do an async task 
    // DB call , cryptoGraphy, networking
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'guru', email: 'Ayush@ex.com'})
    }, 1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async Task 2 done")
    }, 1000)
}).then(function(){
    console.log("async 2 is resolved")
})

const PromiseFour = Promise(function(resolve, rejecct){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username : "ayush", email : 'Ayus@ex.com', password: "12345"})
        }else{
            console.log("SOmething went Wrong")
        }
    }, 1000)
})

PromiseFour.then((user)=> {
    console.log(user)
    return user.username
}).then((username)=> {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("promise has resoleved or rejected")
})

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username: "Ayush",
                email: "AyushMishra@gmail.com",
                password: "123456"
            })
        }else{
            console.log("error : js went Wrong")
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const responce = await PromiseFive
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


async function getAllusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const date = await response.json()
        console.log(data);
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}
getAllusers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((resonce) => {
    return responce.json()
}).then((data) => {
    console.log(data);
}).catch((error) =>
    console.log(error))


promiseOne.all
