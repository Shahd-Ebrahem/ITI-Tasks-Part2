window.alert("Welcome to our website"); // message on website screen
console.log("Welcome to the console");  // message in console
console.error("Error");  //highlighted red line
console.info("Information"); // an information line
console.warn("Warning"); //highlighted yellow line
// * this is a single important comment
// ! warning comments
// ? question comment
// TODO like to do list 
var result = 10+2; // addition -> 12
result = 10-2;     // subtraction -> 8
result = 10*2;     // multiplication -> 20
result = 10/2;     // division -> 5
result = 10**2;    // power -> 100
result = 10%2;     // modulus -> 0
result = Math.sqrt(100); // calculate the square root of 100
var word = '123';        // a string in single quotes !
var number = parseInt(word); // convert a string into a number
var number = Number(word); // convert a string into a number too
var fName = "shahd";
var sName = "ebrahem";
var fullName = fName.concat(" ",sName); // concatenation
console.log(fName + " " + sName); // concatenation of strings
//console.log(fName , sName);
var speech = "Web Development Using React";
console.log(speech.length); // return number of characters (including spaces)
console.log(speech.toLowerCase); // make all sentence small characters
console.log(speech.toUpperCase); // make all sentence capital characters
console.log(typeof(speech)); // type of a variable
console.log(speech.indexOf("Using")); // index of the word "Using",count from 0
console.log(speech.charAt(2)); // return character in index 2
console.log(speech.slice(0,3)); // show word "Web"
var num1 = 10, num2 = 10;
console.log(num1==num2); // return true
num2 += 3;
console.log(num1==num2); // return false
var notNum = "13";
console.log(num2===notNum); // return false
var string = "A";
var ascii_value = string.charCodeAt(0);
console.log(ascii_value); // return ascii value of character A -> 65
var num = Number(window.prompt("Enter your number"));
if (num>0 && num%2==0) {
console.log("positive and Even Number");
}
else if (num>0 && num%2!=0) {
console.log("positive and Odd Number");
}
else if (num == 0){
console.log("zero Number");
}
else if (num<0 && num%2==0) {
console.log("Negative and Even Number");
}
else if (num<0 && num%2!=0) {
console.log("Negative and Odd Number");
}
else {
console.log("Please Enter a valid integer number");
}
var sign = window.prompt("Enter traffic light color");
switch (sign) {
    case ("Red"):
        console.log("stop and wait behind the stop line");
        break;
    case ("Yellow"):
        console.log("Warns that the red light is about to appear");
        break;
    case ("Green"):
        console.log("drivers can proceed if the way is clear");
        break;
    default:
        console.log("The light is invalid in traffic lights");
}
var bol = true;
console.log("Even Numbers from 0 to 10 are: ");
console.log(bol==true?"bol is true":"bol is false");
for (var i=0 ; i<11 ; i+=2 ){
    console.log(i);
}
console.log("Odd Numbers from 0 to 10 are: ");
var i =0;
while (i<11) {
    if (i%2 != 0) {
        console.log(i);
    }
    i++;
}
var x =1;
do {
    console.log("x = ",x);
} while(x>1);
function calcAverage (num1,num2){
    return (num1+num2) / 2
}
var getAvg = (n1,n2) => (n1+n2)/2 ;
var obj1 = {
    name: "shahd",
    age: 20,
    gender: "female",
    job: "still studying",
    hobby: function (par) {
        console.log("my hobby is: ",par);
    },
    obj2: {
        name: "ebrahem",
        gender: "female",
    }
};
console.log("obj1 name: " ,obj1.name);
console.log("obj2 name: " ,obj1.obj2.name);
obj1.hobby("singing");















