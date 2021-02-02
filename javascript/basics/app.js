//"use strict";
console.log("Connected to js.");

// Notes
// Declare a variable

/***************  1.Global vs Local variables (Lexical scoping) **************
 * (a) 'use strict' in the beginning to enforce variable declaration. It it is not
 *      given, the variables which are not declared are global variables.
 * (b) let vs var, var is function scope and let is block scoped.
 * (c) const in js cannnot be changed.
 *
 */

var num = 8;

(function() {
  i = 6;
  console.log(i);
})();
console.log("Printing the global variable: " + i);

(function abc() {
  var k = 1;
  if (true) {
    var k = 3;
    console.log(k);
  }
  console.log(k);
})();

/***************  2. Hoisting in Javascript **************
 * (a) All the variables are hoisted in the top of the functon.
 *
 */

var x = function() {
  var a = 6; //function scope
  if (true) {
    var y = 4; //block scope
  }
  console.log(y);
};
x();

/***************  3. Scope and Scope Chain **************
 * (a) Nested functions have access to variables declared in their outer space.
 * -Primary Data Type   :  (String, Number[NaN, +infinity, -infinity, +0, -0], Boolean)
 * -Composite Data Type :  (Array, Object)
 * -Special Data Type   :  (NAN,Undefined, Null)
 *
 */

var message = 'My new name is "John"';
//var message = "I am 'John'";
var hexInt = 0xff;
//alert("Data Type is :" + typeof hexInt);

var negInfinity = 1 / -0;
console.log(negInfinity);

/***************  4. Objects and Properties **************
 * (a) Objects are noted with {}. Arrays are special type of objects [].
 */

var obj = {}; //Empty object
var x1 = {
  prop1: "prop1val",
  prop2: "prop2val",
  prop3: null,
  prop4: null,
  "prop4 with space": null
};
x1.prop3 = "prop3val";
x1["prop4 with space"] = "prop4val";

//Object
var x2 = {};
x2.p1 = "zp1";
x2.p2 = "zp2";
x2.p3 = false;
x2["age"] = 6;
console.log(x2);

//Arrays
var x3 = ["a", true, 6, "John"];
x3.push(true);
x3.push(1 / -0);
x3.pop(); // Pop removes the last element.
console.log(x3);
console.log(x3[2]);

/***************  5. Data type conversion ***************/
let a1 = 2 + 2 + "2" + 2;
let a2 = 2 + true; //Gives 3
let a3 = 3 + true + "2"; //Print 32
console.log(a1);

if (x !== undefined || x !== null || x !== 0) {
} //same as
if (x) {
}

/***************  6. Array.from Method in JS ***************/
/***************  7. Array and Object Performance ***************/
//To check an inbuilt function we have to use dir.
//Array has a prototype method called from. (Array.from)
console.dir(Array);
[1, 2, 3].splice(); //Array methods
Array.from([]); //Array constructor methods

let str = "samantray";
console.log([...str]); //Spread operator will convert to an array
const fromString = Array.from(str);
const fromScratch1 = Array.from({ length: 5 }, (v, i) => v);
const fromScratch2 = Array.from({ length: 5 }, (v, i) => i * i);
const fromScratch3 = new Array(5).fill(0).map((v, i) => i);
console.log(fromScratch3);

const Ary = [1, 1, 2, 2, 3, 4];
console.log(Array.from(new Set(Ary))); //Set holds all unique values.
console.log([...new Set(Ary)]);

const func1 = function() {
  console.log(Array.from(arguments).join("-"));
};
func1("m", "a", "n", "a", "s");

// 1. Negative Indexes
// 2.How they are different from objects
// 3.How they impact the performances
console.log("------");
const ary1 = [1, 2, 3]; //These elements have indexes
ary1[-1] = 0; //This has key value pair like object
ary1["What is your name"] = "Manas";
for (let key in ary1) {
  //Arrays are behaving like objects (key and values) Arrays are associative arrays.
  console.log(`${key}:${ary1[key]}`); //Template String
}
const ary2 = [1, 2, 3];
const obj1 = {};
obj[0] = 1;
obj[2] = 2;
obj[3] = 3;

//Array vs Object performance comparision
console.time("arr");
const a = [];
for (let i = 0; i < 100000; i++) {
  a[i] = i;
}
console.timeEnd("arr");

console.time("obj");
const o = {};
for (let i = 0; i < 100000; i++) {
  o[i] = i;
}
console.timeEnd("obj");

/***************  8. Object Oriented Programming ***************/
//Objects in js (1.Non functional and 2.Functional). Functions in js is also object.
//Array has a prototype method called from. (Array.from)

var Pizza = {
  brand: "Dominos",
  crust: "thin",
  toppings: 3,
  hasBacon: true,
  howmanyToppings: function() {
    return this.toppings;
  }
};
Pizza.price = 12;
delete Pizza.crust;
console.log(Pizza);
