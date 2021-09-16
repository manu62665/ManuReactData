//1.string
let message:string = "Hello World!";
message = "Hello"

//2.number
let age:number = 20;
age = 10;

//3.boolean
let isAdmin: boolean = true;
isAdmin = false;

//4.any
let a: any = 10;
a="hello"
a = 20
a = { name: "Manoj" }
a = [1, 2, 3];
a = 10
a = "sdlfk";
a={name:"bunny"}

for (let i = 0; i < a.length; i++){
  console.log(a[i])
}

//5.Arrays
let students: number[] = [1, 2, 3];
students = [10]

let teachers: string[] = ["bunny"];
teachers = ["manoj"]

let users: any[] = [];
users = [10, "sadf"]

//6.Tuples
let user: [string, number] = ["manoj", 20];
user = ["bunny", 10]

let userData: [string, number][] = [];
userData = [["bunny", 20], ["manoj", 10]]

//7.Union
let person: string | number;
person = "manoj";
person = 20;

//8.Enum
const RED = "Red";
const BLUE = "Blue";
enum Colors{
  RED="Red",
  BLUE="Blue",
  GREEN="Green"
}
console.log(Colors.RED)

//9.Objects

type Car = {
  name: string,
  price:number
}
let car:Car = {
  name: "Telsa",
  price:100
}
car.name = "Audi"

//10.Type Assertion
let username: unknown = "bunny";
let userId: number = <number>username;
let userNames: string = <string>username;
let firstname: string = username as string;

//11.null, undefined
let abc: null = null;
let noValue: undefined = undefined;
