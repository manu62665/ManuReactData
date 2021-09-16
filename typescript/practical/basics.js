"use strict";
//1.string
let message = "Hello World!";
message = "Hello";
//2.number
let age = 20;
age = 10;
//3.boolean
let isAdmin = true;
isAdmin = false;
//4.any
let a = 10;
a = "hello";
a = 20;
a = { name: "Manoj" };
a = [1, 2, 3];
a = 10;
a = "sdlfk";
a = { name: "Bunny" };
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
//5.Arrays
let students = [1, 2, 3];
students = [10];
let teachers = ["bunny"];
teachers = ["manoj"];
let users = [];
users = [10, "sadf"];
//6.Tuples
let user = ["manoj", 20];
user = ["bunny", 10];
let userData = [];
userData = [["bunny", 20], ["manoj", 10]];
//7.Union
let person;
person = "manoj";
person = 20;
//8.Enum
const RED = "Red";
const BLUE = "Blue";
var Colors;
(function (Colors) {
    Colors["RED"] = "Red";
    Colors["BLUE"] = "Blue";
    Colors["GREEN"] = "Green";
})(Colors || (Colors = {}));
console.log(Colors.RED);
let car = {
    name: "Telsa",
    price: 100
};
car.name = "Audi";
//10.Type Assertion
let username = "bunny";
let userId = username;
let userNames = username;
let firstname = username;
//11.null, undefined
let abc = null;
let noValue = undefined;
