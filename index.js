// 1. Ways to print in JavaScript
//  console.log("Hello Word")
// alert("me")
// document.write("this is document write")

// 2.javascript console API 
// console.log("Hello Word", 4 + 6, "Another log");
// console.warn("this is warning");
// console.warn("this is an error");

// 3. Javascript Variables
// what are Variables? - Containers to store data values

var number1 = 25;
var number2 = 34;
//console.log(number1 + number2);

// 4. Data types in Javascript
// String Data type
var str1 = "This is a string";
var str2 = 'This is a string';

// Numbers data type
var num1 = 345;
var num2 = 56.76;

// Objects
var marks = {
    ravi: 34,
    sham: 56,
    ram: 77
}

// Boolean 
var a = true;
var b = false;
//console.log(a);

// undefined
var und;
//console.log(n);

// null
var  n = null;
//console.log(n);

// At a very high level, there are two types of data types in javascript
// 1.Primitive = undefined, boolean, symbol, string, Number, null
// 2.Reference = Arrays and Objects

var arr = [1,2,3,4,5]
// console.log(arr)

//Operators in JavaScript
// Arithmetic Operators
var a = 34;
var b = 56;
console.log("The value of a + b is", a+b)
console.log("The value of a - b is", a-b)
console.log("The value of a * b is", a*b)
console.log("The value of a / b is", a/b)

// Assignment Oprators
var  c = b;
c += 2;
c -= 2;
c *= 2;
c /= 2;
console.log(c);

//  Comparsion oprators
let x = 34;
let y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);

