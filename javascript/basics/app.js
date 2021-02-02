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
 ***************  4. Data types *************************
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

/***************  5. Objects and Properties **************
 * (a) Objects are noted with {}. Arrays are special type of objects [].
 * -Primary Data Type   :  (String, Number[NaN, +infinity, -infinity, +0, -0], Boolean)
 * -Composite Data Type :  (Array, Object)
 * -Special Data Type   :  (NAN,Undefined, Null)
 *
 */

var obj = {}; //Empty object
var x1 ={prop1:"prop1val", prop2:"prop2val", prop3:null, prop4:null, "prop4 with space":null};
x1.prop3="prop3val";
x1["prop4 with space"] ="prop4val";

//Object
var x2={};
x2.p1="zp1";
x2.p2="zp2";
x2.p3=false;
x2["age"]=6;
console.log(x2);

//Arrays
var x3=["a", true, 6, "John"];
x3.push(true);
x3.push(1/-0);
x3.pop(); // Pop removes the last element.
console.log(x3);
console.log(x3[2]);