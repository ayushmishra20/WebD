function saymyName(){
    console.log("s");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("m")
}
// saymyName()


function addTwoNumbers(num1, num2){
    console.log("Sum of no ", num1+num2)

}
// addTwoNumbers(4,5)

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
function calculatecartitem( ...num1){
    return num1
}
// console.log(calculatecartitem(300,400,500,600,300))

const user = {
    username : "Ayush",
    course : "JS",
    price : 199,
    instructor : "AM"
};

// console.log(`Welcome Mr./Ms. ${user.username} , you have succefully purchased ${user.course} course worth of ${user.price} , which will be teached by ${user.instructor} sir `);

const handleObject = ({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));