let x = 5;
const y = "Hello";
const a = true;
const b = null;
const c = undefined;

const arr = [1, "Hello", true];
arr.push(2);
arr.pop();
arr.shift();
arr.unshift(5);
console.log(arr.length);

if ("5" === 5) {
  // == === < > <= >= != !==
  console.log("string 5 is equal to number 5");
}

if ("5" === 5) {
  console.log("string 5 is equal to number 5");
} else {
  console.log("=== matches types too!");
}

if (false) {
  //
} else if (false) {
  //
} else {
  //
}

if ((false || true) && x > 2) {
  // &&  and     ||  or      !  Not
  console.log("happened");
}

// x=5
while (x > 2) {
  console.log(x);
  x--;
}
console.log("end of while loop");

for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log("end of for loop");

console.log("-------------------------------");
const arr2 = [50, 9, 23, 10];
console.log(arr2);
for (let i = 0; i < arr2.length; i++) {
  arr2[i]++;
}
console.log(arr2);
console.log("-------------------------------");

let num1 = 10;
let num2 = 20;
let num3 = num1 + num2; // num3 = 30
// num3 = num3 + 20;
// igivea rac
num3 += 20;

num3 -= 2;
num3 *= 2;
num3 /= 2;
num3 %= 10;

console.log(num3);
