// Function w/o Parameter
function sayHello(){
    console.log("wassup")
}
// Invoking AKA calling a function
sayHello();


// Refactor to use arguments and parameters


function sayBye(preferredName){
    console.log("Bye " + preferredName)
}

sayBye("Iris");


// Function with Parameter

function sayHelloUser(usersUsername) {
    console.log("wassup" + usersUsername);
}
// Invoking with an argument
sayHelloUser( " Madonna");
sayHelloUser(' Isaac');

// Function with return
function sayBye(username) {
    return "Peace out " + username
}

const functionResp= sayBye("Paul Wall")
console.log(functionResp);


// Global Scope example

const username = "Bobby";
function sayBye(){
    console.log("you will always see me " + username);
}

sayBye();

console.log(username);

//Local Scope
function sayBye(){
    const username = "bobby"
    console.log("you will always see me " + username);
}

function sayHi(){
    console.log("you will always see me " + username");
}

sayBye();

console.log(username);

function addFourDivideByTwo (num){
    const sum = num + 4;
    const dividedByTwo = divideByTwo(sum);
    return dividedByTwo

}
function divideByTwo(num) {
    return num / 2;
}

console.log(addFourDivideByTwo(5));

// Function Declaration
function sayHello(){
    console.log("Hello")
}

sayHello();

// Function Expression
const sayHello = function () {
    console.log ("Hello")
}

sayHello();

//Arrow Function
// arrow acts as a 'function' action key
const sayHello = () => {console.log("Hello")}

sayHello();

function dog() {
    const dog1 = "darla";

    function walk() {
        const dog1 = "Oreo";
        console.log(dog1)

    }
    function walk1() {
        const dog1= "Spanky";
        console.log(dog1)
    }
    walk()
    walk1()
}

function addSum(num1, num2) {
    console.log(num1 + num2)
}

addSum(2, 3);