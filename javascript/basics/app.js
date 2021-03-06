//"use strict";
const separator = () => console.log("-------------------------");
// link : techsith tutorials (https://www.youtube.com/watch?v=sXV_31fwetY&list=PL7pEw9n3GkoVYU-ZKBrDnxIiiUn0YP-uO&index=9)
// techsith javascript fundamentals youtube videos
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
let add = (a = 0, b = a) => {
  if (a === undefined) {
    a = 0;
  }
  b = b || 0;
  return a + b;
};
console.log(add(undefined, 1));

let addArray = (a = [], b = []) => {
  return [...a, ...b];
};
console.log(addArray([1], [3]));
separator();
const x6 = { a: 1, b: 2 };
let addObject = ({ a = 0, b = 0 } = {}) => {
  return a + b;
};
console.log(addObject(x6));

/***************  14. Callback Functions (Higher Order Functions)***************/
let c = function() {
  console.log("I am called from inside a function.");
};

let d = function(callback) {
  console.log("I am inside the main function.");
  callback();
};
d(c);

let addNum = function(a, b) {
  return a + b;
};
let multiplyNum = function(a, b) {
  return a * b;
};
let calc = function(num1, num2, callback) {
  if (typeof callback === "function") {
    return callback(num1, num2);
  }
};
console.log(calc(45, 67, (a, b) => a / b));
separator();
var myArr = [
  {
    num: 5,
    str: "apple"
  },
  {
    num: 7,
    str: "cabbage"
  },
  {
    num: 1,
    str: "banana"
  }
];

myArr.sort(function(val1, val2) {
  if (val1.num < val2.num) {
    return -1;
  } else return 1;
});
console.log(myArr);

/***************  15. ES6 Rest and Spread Operator ***************/
var x7 = function(a, b, c, ...n) {
  //This is also called rest parameters
  //Spread operator spreads the argument to an array.
  console.log(n);
  console.log(arguments); //arguments is an object not an array
  var args = Array.prototype.slice.call(arguments, 0); //converting arguments to an array
  var args = [].slice.call(arguments, 0);
  console.log(args);
};
x7(1, false, 2, "banana", undefined);
var arr1 = ["d", "e", "f"];
var arr2 = ["a", "b", "c", ...arr1, "g", "h"];
console.log(arr2);

var a7 = [1, 2, 3];
var b5 = [4, 5, 6];
Array.prototype.push.apply(a7, b5); //old way
a7.push(...b5); //New way
console.log(a7);

/**************  16. ES6 Spread Operator and Application ***************/
let q1 = [1, 2, 3, 4];
let q0 = [5, 6, 7];
let q2 = Object.assign([], q1);
let q3 = [...q1, ...q0];
console.log(q1.concat(...q0));
let func = function(...arg) {
  console.log(arg);
};
func(q1);
let mathData = [6, 9];
console.log(Math.hypot(...mathData));
console.log(Math.min(...q2));

/**************  17. IIFE (Immediately invoked function expression) ***************/
//Self invoked function, It can be anonymous function.
(function(i) {
  console.log(i * i);
})(8);
!(function(i) {})(9);
~(function(i) {})(9);
-(function(i) {})(9);
+(function(i) {})(9);
//(function($) {
//  $(this).addClass("MyClass");
//})(window.JQuery);
//How to write a simple js library with iife
var counter = (function() {
  var i = 0;
  return {
    get: function() {
      return i;
    },
    set: function(val) {
      i = val;
    },
    increment: function() {
      i++;
    }
  };
})();
console.log(counter.get());
counter.set(6);
counter.increment();
console.log(counter.get());

/**************  18. Arrow Function (ES6) ***************/
("use strict");
() => {}; //Fat Arrows
//var getA = function(a){
//    return a;
//}
var z = 8;
let getA = a => a;
let square = a => {
  return a * a;
};
let cube = _ => {
  return z * z * z;
};
console.log(getA(87));
//Why are we using fat arrow
var x8 = function() {
  this.val = 1;
  setTimeout(function() {
    this.val++;
    console.log(this.val);
  }, 1);
};
var x8 = function() {
  this.val = 1;
  setTimeout(function() {
    this.val++;
    console.log(this.val);
  }, 1);
};
var x88 = function() {
  this.val = 1;
  //setTimeout(() => {
  //  this.val++;
  //  console.log(this.val);
  //}, 1);
};
var x9 = new x88(); //this is not recognized insed setTimeout fuction.

/**************  19. setTimeout and setInterval ***************/
//let timeoutID = window.setTimeout(function, miliseconds);
//setTimeout is asynchronous
//setTimeout(() => {
//  console.log("greetings from setTimeout.");
//}, 5);

let message1 = () => {
  console.log("greetings from setTimeout new.");
};
//setTimeout(message1, 6);

//let timeoutID = setInterval(function, miliseconds);
//clearInterval(timeoutID);

/**************  20, 21. call appy and bind ***************/
var objct1 = {
  num1 : 5,
  num2: 6
};
var objct2 = {
  num1 : 6,
  num2: 8
};
var addToThis = function (a, b, c){
  return this.num1 +this.num2 + a + b + c;
}
separator();
console.log(addToThis.call(objct1, 3,4,5));
console.log(addToThis.call(objct2, 3,4,5));
var objArr = [6,7,10];
console.log(addToThis.apply(objct1, objArr));
var bound = addToThis.bind(objct1);
console.log(bound(5,8,12));

//Mixing, multiple inheritance can be achieved with call, apply and bind
//Every object has prototype and it has bunch of methods
//utility of call function
let argsToArray = function(){
  console.dir([].slice.call(arguments)); //converts arguments to an array
}
argsToArray(1,2,3);

let mammal = function(legs){
  this.legs = legs;
}
let cat = function(legs, isDomesticated){
  mammal.call(this, legs);
}
let lion = new cat(4, false);
console.log(lion);
//utility of apply function
//when you pass an argument, it converts to regular arguments
let numArray = [1,2,3];
console.log(Math.min.apply(null, numArray));
//utility of bind function
let button = function(content){ //This is a constructor
  this.content = content;
}
button.prototype.click = function(){
  //console.log(`${this.content} clicked`);
}
let newButton = new button('add');
let boundButton = newButton.click.bind(newButton);
boundButton();

let myObj ={
  asyncGet(callbck){
    callbck();
  },
  parse(){
    //console.log('parse called.')
  },
  render(){
    this.asyncGet(function(){
      this.parse();
    }.bind(this));
  }
}
myObj.render();

/**************  22 Closures in (loop, inner fn and setTimeout) ***************/
let f = () =>{
  let i =1;
  let j =2;
  return () =>{
    console.log(i)
  }
};
console.dir(f());

/**************  23 Javascript Modules (ES6) ***************/
/**************  24 Function/Method Chaining ***************/
var obj = function(){
  var i =0;
  var add = function(j){
      i += j;
      return this;
  };
  var subtract = function(j){
    i -= j;
    return this;
  };
  var print = function(){
    console.log(i);
  };
  return {add:add, subtract:subtract, print:print}
}
var x = obj();
x.add(5).subtract(2).print();

/**************  25 Currying in Javascript ***************/
//First example of currying
var addition = function(a){
  return function(b){
    return a + b;
  }
}
var addToSix = addition(6);
console.log(addToSix);

//Second example of currying
var avg = function(...n){
  let tot = 0;
  for(let i=0; i<n.length; i+=1){
    tot += n[i];
  }
  return tot/n.length;
};
var spiceUp = function(fn, ...n){
  return function(...m){
    return fn.apply(this, n.concat(m));
  }
}
var doAvg = spiceUp(avg, 1, 2, 3);
console.log(doAvg(7, 8, 9));

//Third Example of currying
var sayWhat = function(a){
  return function(b){
    return function(c){
      console.log("Saying "+ a + " to "+ b + " using " + c);
    }
  }
}
sayWhat('Hello')('friends')('Javascript');

/**************  26 Object Oriented (Classes) Programming ***************/
//Javascript classes are nothing but function constructors with prototype methods
class Car{
  constructor(color){
    this.color = color;
  }
  drive(){
    console.log("...driving");
  }
}
console.log(typeof(Car));
let redcar=new Car('red');