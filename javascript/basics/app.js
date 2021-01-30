//"use strict";
console.log('Connected to js.');

// Notes
// Declare a variable

/***************  1.Global vs Local variables (Lexical scoping) **************
 * (a) 'use strict' in the beginning to enforce variable declaration. It it is not
 *      given, the variables which are not declared are global variables.
 * (b) let vs var, var is function scope and let is block scoped.
 * 
 */

var num =8;

(function (){
    var i=6;
    console.log(i);
}());
console.log('Printing the global variable: '+i);

(function abc(){
    var k = 1;
    if(true){
        var k =3;
        console.log(k);
    }
    console.log(k);
}());
