"use strict"
let element = document.querySelector(".header"); // select h1

element.addEventListener("click", function (){
    console.log("you clicked  header");// show message when click on the header
})

element.addEventListener("dblclick", function (){
    console.log("you doubled click  header");// show message when doubling click on the header
})


let newElem = document.createElement("div");// create element its type is div
document.body.appendChild(newElem); // append the item in the body of the page
newElem.setAttribute("class","jsDiv"); // give a class attribute with value jsDiv
let txt = document.createTextNode("This is my website");// create text to append to the div
newElem.appendChild(txt);// append text into the div

newElem.addEventListener("mousedown", function (){
    console.log("you put mouse on jsDiv")// when pressing the mouse;
})

newElem.addEventListener("mouseup", function (){ // when raising up your finger from the mouse
    console.log("you raised mouse from jsDiv");
})

newElem.addEventListener("mousemove", function (){ // when moving mouse in all passing the newElem
    console.log("you moved the mouse");
})


document.addEventListener("keydown", function (){// when press the keyboard any key
    console.log("you press down keyboard");
})


document.addEventListener("keyup", function (){ // when raise up from keyboard
    console.log("you press up keyboard");
})

document.addEventListener("keypress", function (){
    console.log("you pressed on keys"); // when pressing any key that can write speech
})

let imag = document.querySelector("img");
imag.addEventListener("drag", function(){ // when still catch an image and move
    console.log("the image has been moved");
})

let field = document.querySelector("#txt"); // when getting into the field
field.addEventListener("focus", function(){
    console.log("user entered input field");
})

field.addEventListener("blur", function(){ // when getting out of the field
    console.log("user leaved input field");
})

// document.addEventListener("contextmenu", function(e){
//     console.log("cannot show inspect");
//     e.preventDefault(); 
// })

document.getElementById("dad").remove(); // remove element with id 'dad'
document.querySelector(".parent").removeChild(document.querySelector(".child")); // remove child with class 'child' of div 'parent' from the webpage

let userName = "shahd";
// let userName = "sara"; // let variable cannot be redeclared
const job = "developer";
// job = "teacher"; // error in console, const cannot be reasigned

console.log(`Hello! My name is ${userName} and i am a ${job}`);

let arr1 = [10,20,30,40,50]; //creating an array of number
let arr2 = ['A','B','C','D','E'];//creating an array of strings
console.log(...arr1 , ...arr2); //spread in log and concatenation
let arr = [...arr1,...arr2]; // spared in concatenation
console.log(...arr);//spread in log

let employee = { // an object has 4 keys, one of them is a child object
    firstName: "Shahd",
    age: 20,
    salary: 1000,
    child: {
        firstName: "sara",
        gender: "female"
    }
}
let {firstName:fname , age:userAge , child: {firstName:chName , gender:chGender}} = employee; // destroy object and its internal object and make alias names
console.log(`employee data: Name is ${fname}, age is ${userAge}`);
console.log(`child data: Name is ${chName}, gender is ${chGender}`);

let array = ['red','green','yellow','blue','orange','purple'];
let [color1,color2,color3,color4] = array; // destroy array in just 4 values
console.log(`the first 4 colors in the array are: ${color1}, ${color2}, ${color3}, ${color4}`);

element.addEventListener("click", function( { target, clientX } ){
    console.log(target); // destroy addEventListener in just two variables by clicking on header
    console.log(clientX);
})

this.alert(" 'this' refers to 'document'")//this is equal to document in general

for (let colorElem of array){ // loop on the array 
    console.log(colorElem);
}

// let employees = [
//     {empName: "shahd", empSalary:5000, empAge: 20},
//     {empName: "sara", empSalary:7000, empAge: 26},
//     {empName: "yasmeen", empSalary:9000, empAge: 31}
// ]

// for (let item of employees) { // for of loop to loop on an array of objects
//     let {empName,empSalary} = employees; // destroy array in two variables
//     console.log(empName); 
//     console.log(empSalary);
    
// }

for (let one in employee){ // for in loop to loop on the object employee
    console.log(one); // return the ket
    console.log(employee[one]); // return key's value
    
}

let arrMap = [1,2,3,4,5,6,7,8,9,10]; // an array of 10 items
let mapRes = arrMap.map(num => num * 10);
console.log(mapRes); // return all items but multiplied to 10

let filterRes = arrMap.filter(filterNum => filterNum > 5);
console.log(filterRes); // return all items greater than 5

let findRes = array.find(findNum => findNum === "green");
console.log(findRes); // return the item with the value 'green'

let findInxRes = array.findIndex(findInxNum => findInxNum === "blue");
console.log(findInxRes); // return index of item 'blue' in 'array'




