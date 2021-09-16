//1.functions
function sum(a:number, b:number,c?:number):number {
  return a + b;
}
sum(10, 20)

function log(message: string):void {
  console.log(message)
}
log("Hello")

function error():never {
  throw new Error("Network Error")
}

//2.interfaces

interface MobileInterface{
  title: string
  price:number
}

let mobile = {
  title: "Redmi",
  price:2000
}

interface SumFunction{
  (a:number,b:number,c:number):number
}

let addition: SumFunction = (a: number, b: number, c: number) => a + b + c;


let sub: SumFunction = (a: number, b: number, c: number) => a - b - c;

type MobileType = {
  name: string
  age:number
}
type stringType = string;
let user2: MobileType = {
  name: "bunny",
  age:20
}

//3.Unknown vs Any
let userage: unknown = 10;
let userage2: number = <number>userage;

let userage3: any = 20;
let userage4: string = userage3;

//4.Class
interface HumanInterface{
  name: string
  age: number
  profession?:string
}
class Human implements HumanInterface{
  //private name: string
  //protected age: number
  //public profession: string
  // name: string
  // age: number
  // profession: string
  constructor(public name:string,public age:number,public profession:string) { }
}

class Manoj extends Human{
  city:number
  constructor(name:string,age:number,profession:string,city:number) {
    super(name, age, profession);
    this.city = city;
  }
  changeAge(age: number) {
    this.age = age;
  }
}

let manoj = new Human("Manoj", 20, "Developer")
let manoj2 = new Manoj("Manoj Akkala", 20, "DEV", 10);

//5.Generics

function createItems<Type>(items:Type[]):Type[] {
  return new Array().concat(items)
}

let numberArray = createItems<number>([1, 2, 3]);
let stringArray = createItems<string>(["bunny", "Manoj"]);