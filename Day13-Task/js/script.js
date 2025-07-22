var person = {
    Name: "sera",
    age: 20,
    hoppy: "singing"
};
console.log(person);
person.Name= "shahd";
person.gender= "female";
delete person.hoppy;
console.log(person);
var toString = JSON.stringify(person);
console.log(toString);
var toObjet = JSON.parse(toString);
console.log(toObjet);
var colorArr = ["Red","Black","White","Yellow","Blue"];
console.log(colorArr[2]);
console.log(colorArr.length);
console.log(colorArr.push("Green"));
console.log(colorArr.pop());
console.log(colorArr.slice(0,3));
console.log(colorArr.splice(0,1,"Beige"));
console.log(document.getElementById("test"));
console.log(document.getElementsByClassName("header"));
var hea = document.getElementsByTagName("h1");
console.log(hea);
console.log(document.getElementsByName("txt"));
console.log(document.querySelectorAll(".sec div"));
console.log(document.querySelector("#test"));
var elem = document.querySelector("#test");
elem.addEventListener("click", function() {
    console.log("you clicked on paragraph tag");
})
elem.addEventListener("dblclick", function() {
    console.log("you doubled clicked on paragraph tag");
})
elem.addEventListener("mousedown", function() {
    console.log("you clicked the mouse");
})
elem.addEventListener("mouseup", function() {
    console.log("you raised the mouse");
})
var imag = document.querySelector("img");
imag.addEventListener("drag", function() {
    console.log("you moved the image");
})
document.addEventListener("contextmenu", function(par) {
    console.log("prevent right click");
    par.preventDefault();
})
var test = document.createElement("div");
test.innerText= "A div created by js";
test.setAttribute("div","dimo");
document.body.appendChild(test);
test.addEventListener("click", function(){
    console.log("Welcome to the js div");
});
test.style.cssText="background-color: lightblue";







