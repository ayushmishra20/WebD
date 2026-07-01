// const User = new Object();

// const User = {};

// User.id = "123Abc";
// User.name = "Ayush";
// User.isLoggedIN = false;

// console.log(User);

const newUser = {
  name: {
    firstName: {
      Nickname: "Aayu",
      OfficialNAme: "",
    },
    LastName: {
      capitalLastname: "MISHRA",
      smallLastname: " mishra",
    },
  },
  Email: "1234Ayush@google.com",
  isLoggedIN: false,
};

// console.log(newUser);
// console.log(newUser.name.firstName.Nickname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email)


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ayush"
}

course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);

console.log(course.instructor);

console.log(instructor);

// ++++++++++++++++++ json formate ++++++++++++

// {
//     "name": "ayush",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]