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
var n = null;
//console.log(n);

// At a very high level, there are two types of data types in javascript
// 1.Primitive = undefined, boolean, symbol, string, Number, null
// 2.Reference = Arrays and Objects

var arr = [1, 2, 3, 4, 5]
// console.log(arr)

//Operators in JavaScript
// Arithmetic Operators
var a = 34;
var b = 56;
// console.log("The value of a + b is", a+b)
// console.log("The value of a - b is", a-b)
// console.log("The value of a * b is", a*b)
// console.log("The value of a / b is", a/b)

// Assignment Oprators
var c = b;
c += 2;
c -= 2;
c *= 2;
c /= 2;
// console.log(c);

//  Comparsion operators
let x = 34;
let y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);

// Logical operators
// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(false && true)


// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)
// console.log(false || true)

// logical not
//  console.log(!false);
//  console.log(!true);

// Function in javascript

//  function avg(a, b){
//     return (a + b)/2;
//  }
// DRY = Do not repeat yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
//console.log(c1, c2)

// Conditionals in JavaScript

// let age = 34;
// 1. Single  if statement
// if (age > 8){
//     console.log('You are not a kid');
// }


// 2. If-else  statement
// if (age > 8){
//     console.log('You are not a kid');
// }

// else{
//     console.log('You are  a kid');
// }

// 3. if-else ladder
// if (age > 32){
//     console.log('You are not a kid');
// }

// else if(age >26){
//     console.log(" Yes Bacche nahi rahe");
// }

// else if(age >22){
//     console.log("Bacche nahi rahe");
// }

//   else{
//     console.log("Bcche rahe");
//   }
//  console.log('End of ladder');

// Loops

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr1);
//  for(let i = 0;i<arr1.length;i++){
//     if(i==2){
//         break;
//     }
//      console.log(arr[i]);
//  }

// arr1.forEach(function(element){
//     console.log(element);
// })


// While loop
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }


// Do while loop
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);


// Break Statement

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
//  for(let i = 0;i<arr1.length;i++){
//     if(i==2){
//         break;
//     }
//      console.log(arr[i]);
//  }

 // Continue statement
 let arr2 = [1, 2, 3, 4, 5, 6, 7];
 for(let i = 0;i<arr2.length;i++){
    if(i==2){
        continue;
    }
    //  console.log(arr[i]);
 }

 // Arrays Method
 let  myArr = ["Fan", "Camera", 53, null, true];

 // length
 //console.log(myArr.length);

 //pop method (last element remove)
 myArr.pop();
 //console.log(myArr);

 //push method
 myArr.push("Vaishnavi")
 //console.log(myArr);

 //shift method
 myArr.shift()
 //console.log(myArr);

 //unshift method
 const newLen = myArr.unshift("Vaishnavi")
//  console.log(newLen);
//  console.log(myArr);

 // String method in JavaScript
 let myLovelyString = "Harry is good boy"

 // length of string
 //console.log(myLovelyString.length);


// indexOf
 //console.log(myLovelyString.indexOf("good"));

 // lastIndexOf
 //console.log(myLovelyString.lastIndexOf("good"));

 // Slice
 //console.log(myLovelyString.slice(0,3));

 // replace method
  d = myLovelyString.replace("Harry", "Ram")
  // d = d.replace("good", "bad")
 // console.log(d, myLovelyString);

 // Date in js
 let myDate = new Date();
//  console.log(myDate);
//  console.log(myDate.getTime());
//  console.log(myDate.getFullYear());
//  console.log(myDate.getDay());
//  console.log(myDate.getMinutes());
//  console.log(myDate.getHours());

// JS DOM Manipulation

// DOM manipulation
let elem = document.getElementById('click');
console.log(elem);


let elemClass = document.getElementsByClassName('container');
//console.log(elemClass);
//elemClass[0].style.background = "yellow";
elemClass[0].classList.add('bg-primary')
elemClass[0].classList.add('text-success')
//console.log(elem.innerHTML);
//console.log(elem.innerText);

tn = document.getElementsByTagName('button')
console.log(tn);


// Selecting using Query

sel = document.querySelector('.container')
console.log(sel);

sel = document.querySelectorAll('.container')
console.log(sel);


// Events in js

function clicked (){
    console.log('The button was clicked');
}

window.onload =  function(){
    console.log('The document was loaded');
}

firstContainer.addEventListener('mouseover', function(){
    console.log("Mouse on container");
})


firstContainer.addEventListener('mouseout', function(){
    console.log("Mouse out  of container");
})

firstContainer.addEventListener('mouseup', function(){
    console.log("Mouse up when clicked on   container");
})


firstContainer.addEventListener('mousedown', function(){
    console.log("Mouse down when clicked on   container");
})









