/* Homework

function factorial(num) {
  let res = 1;

  for (let i = 1; i <= num; i++) {
    res = res * i;
  }

  return res;
}

console.log(factorial(5));
*/

/*
const obj = {
  firstName: "Luka",
  lastName: "Rekhviashvili",
  age: {
    birthYear: 2005,
    age: 19,
  },
  greet: function () {
    console.log("Hello " + this.firstName);
  },
};
// console.log(obj.firstName);
// const myKey = "lastName";
// console.log(obj[myKey]);
obj.greet();
*/

// map function
// arr.map(function (el) {
//     console.log(el);
// });

// reference
// const arr = [1, 2, 3];
// const arr2 = arr;
// arr2[0] = 0;
// console.log(arr);

// const obj1 = {
//   name: "Luka",
// };

// const obj2 = obj1;
// obj2.name = "Saba";
// console.log(obj1.name);

// primitive
// let a = 5;
// let b = a;
// b = 10;
// console.log(a);

// const arr1 = [1, 2, 3];
// const arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i]);
// }

// arr2[0] = 0;
// console.log(arr1);

// Spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// arr2[0] = 0;
// console.log(arr1);

// const obj1 = {
//   name: "Luka",
// };
// const obj2 = { ...obj1 };
// obj2.name = "Saba";
// console.log(obj1);

// const obj1 = {
//   lastName: "Rekhviashvili",
//   innerObj: {
//     name: "Luka",
//   },
// };
// const obj2 = { ...obj1, innerObj: { ...obj1.innerObj } };
// obj2.innerObj.name = "Saba";
// console.log(obj1);

// let obj = {
//   name: "Luka",
//   lastName: "G",
// };

// obj = {
//   ...obj,
//   lastName: "Rekhviashvili",
// };
// console.log(obj);

const person = {
  id: 5,
  name: "s",
  lastName: "s",
  walk: function () {
    console.log(this.name + " is walking");
  },
};

person.walk();
