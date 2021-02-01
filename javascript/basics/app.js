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
 * (a) Nested functions have access to variables declared in their outer space.
 * -Primary Data Type   :  (String, Number[NaN, +infinity, -infinity, +0, -0], Boolean)
 * -Composite Data Type :  (Array, Object)
 * -Special Data Type   :  (NAN,Undefined, Null)
 *
 */

var obj = {}; //Empty object
