//"use strict";
const separator = () => console.log("-------------------------");
// link : techsith tutorials (https://www.youtube.com/watch?v=sXV_31fwetY&list=PL7pEw9n3GkoVYU-ZKBrDnxIiiUn0YP-uO&index=9)
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

var PizzaObj = {
  brand: "Dominos",
  crust: "thin",
  toppings: 3,
  hasBacon: true,
  howmanyToppings: function() {
    return this.toppings;
  }
};
PizzaObj.price = 12;
delete PizzaObj.crust;
console.log(PizzaObj);

//Function object (Private Method)
var PizzaFunctionObj = function() {
  var price = 12; //private member
  this.crust = "thick"; //public member
  var toppings = 4; //private member
  this.hasBacon = false; //public member

  this.getCrust = function() {
    return this.crust;
  };
  var getToppings = function() {
    return toppings;
  };

  var tmp = {};
  tmp.getToppings = getToppings;
  return tmp;
};
var pizzaA = new PizzaFunctionObj();
var pizzaB = new PizzaFunctionObj();
pizzaA.crust = "pan"; //private member
console.log(pizzaA.crust);
console.log(pizzaA.getCrust);
//console.log(pizzaA instanceof PizzaFunctionObj);
console.log("The private members is: " + pizzaA.getToppings()); //This is closure

/***************  9. MAPs and WEAKMAPs (ES6)***************/
const parentObj = {};
const childObj1 = {};
const childObj2 = { numb: 1 };
parentObj[childObj1] = "Apple";
parentObj[childObj2] = childObj2;
console.log(parentObj[childObj2]);
//In javascript: It supports only one key object.We need Maps.
const a4 = {};
const b4 = { num: 1 };
const map = new Map();
map.set(a4, "Manas").set(b4, false);
map.delete(b4);

separator();
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
const ary = [...map]; //Convert to an array with spread operator
//Map persists keys even if the key is delete, whereas weakmap does not.
{
  let x = { a: [1, 2] };
  var weakMap = new WeakMap();
  weakMap.set(x, "Johny");
}
console.log(weakMap);

/***************  10. SETs ***************/
//You cannot have duplicate values in sets.
const ary3 = [1, 2, 2, 4]; //Array Literal
const myArray = new Array(); //Constructor
const mySet = new Set(ary3);
mySet.add(6);
mySet
  .add("India")
  .add("USA")
  .add("UK")
  .delete("USA");
//mySet.clear();
for (let val of mySet) {
  console.log(val);
}
//WeekSets (These only holds objects not primitives and not iterative like Sets)
const ws = new WeakSet([{ a: 1 }, { b: 2 }]);
ws.add({ a: 1 });

/***************  11. Template String (ES6/ES2015) ***************/
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`; //All these declarations are same
let x4 = `bond`;
let bondline = `my name is ${x4},  James ${x4}`; //Interpolation
let one = 1,
  two = 2;
let sum = `adding ${one} and ${two} gives ${one + two}`;
console.log(sum);
separator();
let tagged = function(strArray, ...vals) {
  console.log("str array is :" + strArray);
  console.log("val array is :" + vals);
};
tagged`adding ${one} and ${two} gives ${one + two}`;
console.log("hello world".startsWith("hell"));
console.log("hello world".includes("wo"));
console.log("hello world".repeat(3));

/***************  12. Pass by value and pass by reference ***************/
//In javascript it is always pass by reference.
let a5 = 5;
let a6 = { num: 1 };
let changePrimitive = val => {
  val = 6;
};
let changeObject = val => {
  val = {};
};
changePrimitive(a5);
changeObject(a6);

/***************  13. Default Parameter (ES6) ***************/
let add = (a, b) => {
  if (a === undefined) {
    a = 0;
  }
  b = b || 0;
  return a + b;
};
console.log(add());
