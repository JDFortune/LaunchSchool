// interface Person {
//   name: string;
//   age: number;
//   sayName: () => void;
// }

// interface Student extends Person {
//   sayName: (friend?: string) => void;
// }

// class Person implements Person{
//   constructor(public name: string, public age: number) {}

//   sayName: () => void {
//     console.log(`My name is ${this.name}`);
//   }
// }


// let go = (name: string): void => {
//   console.lof
// }

// let union: "hello" | "goodbye" | "charlie" = "hello";

// union.toUpperCase();

// let no: never = 5 as never;
// let myValue: any = 'hello' as any;
// myValue = no;

// let str: string;
// let myValue: any;

// type myFunc = () => void;

// const funky: myFunc = (arg?: string): void => {
//   if (typeof arg === 'string') {
//     console.log(`Arg's value: ${arg}.`);
//   } else {
//     console.log('Hi')
//   }
// }

// funky('hello');

// type strUnd = string | undefined

// class Person {
//   constructor(public name: string, public age: number) {}

//   sayName(): void {
//     console.log(`My name is ${this.name}`)
//   }
// }

// class Student extends Person {
//   constructor(name: string, age: number, public semester: string) {
//     super(name, age);
//   }

//   override sayName(friend?: string): void {
//     if (typeof friend === "string") {
//       console.log(`Hi ${friend.toUpperCase}!! My name is ${this.name}.`);
//     } else {
//       super.sayName();
//     }
//   }

//   enrollInCourse(courseNumber: string): void {
//     console.log(`${this.name} has enrolled in course ${courseNumber}.`);
//   }
// }

// let student = new Student("Kim", 22, "Fall");
// student.sayName("Jerry");

// interface Movable {
//   speed: number;
//   move(): void;
// }

// class Car implements Movable {
//   constructor(public speed: number) {}

//   move(): void {
//     console.log(`We are going ${this.speed} km/h.`);
//   }
// }


// 2 function signatures
// assign variable to return CSSMathValue

// function combine(arg: string): string;
// function combine(arg: number): number;
// function combine(arg: string | number): string | number {
//   if (typeof arg === 'string') {
//     return arg.toUpperCase();
//   } else {
//     return arg.toFixed(2);
//   }
// }

// let str: string = combine('hello');
// let num: number = combine(4.564543534);

// type Person = { name: string; age: number };
// type Animal = { name: number; age: number; breed: string};

// type PersonAnimal = Person & Animal;

// let pA: PersonAnimal = {
//   name: "Carl"
// }

// type MyFunction = () => void;

// let func: MyFunction = () => console.log("hi");

// type Dynamic = {
//   [key: string]: string | number | undefined;
//   readonly hi?: number;
// }



// function newFunc(name: string, age: number): Person {
//   return {
//     name,
//     age
//   }
// }

// type NewFuncFunction = typeof newFunc;
// type NewFuncParams = Parameters<NewFuncFunction>;
// type NewFunReturn = ReturnType<NewFuncFunction>;

// type AgelessPerson = Omit<Person, "age" | "name">;
// type AgedPerson = Pick<Person, "age">;
// type OptionalPerson = Partial<Person>
// type ReadOnlyPerson = Readonly<Person>

// let obj: Dynamic


// type Obj2 = {age: number}
// type ObjKey = keyof Obj2

// function genericFunc(obj: Obj2, key: ObjKey): Obj2[ObjKey] {
//   return 67
// }
// genericFunc<Obj2, "age">({age:35 }, "age")

// let animal: Animal = {
//   name: 'carl',
//   age: 23,
//   breed: 'cat'
// }

// let carl: Person = animal;

// (carl as Animal).breed

// type NewPerson = Person & { breed: string };

// type Person = {
//   name: string;
//   age: number;
// }

// interface Person {
//   breed: string;
// }

// interface Circle {
//   kind: "circle";
//   radius: number
// }

// interface Square {
//   kind: "square";
//   sideLength: number;
// }

// type Shape = Circle | Square;


// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;
//       throw new Error(JSON.stringify(_exhaustiveCheck));
//   }
// }

// function isCircle(shape: Shape): shape is Circle {
//   return (shape as Circle).radius !== undefined
// }

// function getArea(shape: Shape): number {
//   if (isCircle(shape)) {
//     return Math.PI * shape.radius ** 2
//   } else {
//     return shape.sideLength ** 2;
//   }
// }

// function getLengthOfArray(value: string[]): number
// function getLengthOfArray(value: string): string
// function getLengthOfArray(value: string | string[]): number | string {
//   if (Array.isArray(value)) {
//     return value.length;
//   } else {
//     return "Not an array!";
//   }
// }

// let value = getLengthOfArray('hello');


// function getStrings(arr: unknown[]): string[] {
//   return arr.filter(el => typeof el === 'string');
// }

// function pair<T>(arg1: T, arg2: T): T[] {
//   return [arg1, arg2];
// }

// type User<T> = {
//   name: string;
//   age: T;
// }

// const user: User<number> = {
//   name: "JD",
//   age: 20,
// }


// type NewArr<T> = {
//   [index: number]: T;
// }

// let myArr: NewArr<number> = [1, 2, 3]

// type Pet = {
//   name: string;
//   age: number;
//   type: "dog" | "cat";
// };

// function customIsArray<T>(arg: T | T[]): arg is T[] {
//   return Object.prototype.toString.call(arg) === '[object Array]';
// }

// function feed(petOrPets: Pet | Pet[]) {
//   if (customIsArray<Pet>(petOrPets)) {
//     petOrPets.forEach(pet => console.log(`Feeding ${pet.type}`));
//   } else {
//     console.log(`Feeding ${petOrPets.type}`);
//   }
// }

// type Vehicle = {  model: string; year: number };
// type Motorcycle = Vehicle & { type: "motorcycle" };
// type Car = Vehicle & { type: "car"; doors: number };

// function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
//   return "doors" in vehicle && "type" in vehicle && vehicle.type === "car";
// }

// // Usage
// let myCar: Car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2021,
//   type: "car",
//   doors: 4,
// };

// if (isCar(myCar)) {
//   console.log(myCar.doors);
// }

// type ShapeType = {
//   kind: string;
// }

// type Circle = {
//   kind: "circle";
//   radius: number;
// }

// type Square = {
//   kind: "square";
//   sideLength: number;
// }

// type Shape = Circle | Square;

// let shape: Shape = {
//   kind: "circle",
//   radius: 4,
// }

// shape

// interface Dog {
//   type: 'dog';
//   name: string;
//   age: number;
// }

// interface Bird {
//   type: 'bird';
//   name: string;
//   wingspan: number;
// }

// type Animal = Dog | Bird;

// function describeAnimal(animal: Animal): string {
//   switch (animal.type) {
//     case "dog":
//       return `The dog, ${animal.name} is ${animal.age} years old.`;
//     case "bird":
//       return `The bird, ${animal.name} has a wingspan of ${animal.wingspan} cm.`;
//     default:
//       const _exhaustiveCheck: never = animal;
//       throw new Error(JSON.stringify(_exhaustiveCheck));
//   }
// }

// interface Dog {
//   name: 'dog';
//   age: number;
// }

// interface Bird {
//   name: 'bird';
//   wingspan: number;
// }

// type Animal = Dog | Bird;

// function describeAnimal(animal: Animal): string {
//   switch(animal.name) {
//     case 'dog':
//       return `The dog is ${animal.age} years old.`;
//     case 'bird':
//       return `The bird has a wingspan of ${animal.wingspan} cm.`;
//     default:
//       const _exhaustiveCheck: never = animal;
//       throw new Error(JSON.stringify(_exhaustiveCheck));
//   }
// }

// type Elephant = {
//   kind: "elephant";
//   weight: number;
// };

// type Tiger = {
//   kind: "tiger";
//   speed: number;
// };

// type Peacock = {
//   kind: "peacock";
//   featherLength: number;
// };

// interface Giraffe {
//   kind: "giraffe";
//   neckLength: number;
// }

// type Animal = Elephant | Tiger | Peacock | Giraffe;

// function describeAnimal(animal: Animal): string {
//   switch(animal.kind) {
//     case "elephant":
//       return `The elephant weights ${animal.weight} kg.`;
//     case "tiger":
//       return `The tiger runs ${animal.speed} km/h.`;
//     case "peacock":
//       return `The peacock has a feather length of ${animal.featherLength} cm.`
//     case "giraffe":
//       return `The giraffe has a neck of ${animal.neckLength} feet.`;
//     default:
//       const _exhaustiveCheck: never = animal;
//       throw new Error('Unknown animal: ' + JSON.stringify(_exhaustiveCheck));
//   }
// }

// type Input = string | number | { length: number };

// function processInput(input: string | number): string;
// function processInput(input: { length: number }): number;
// function processInput(input: Input): string | number {
//   if (Array.isArray(input)) {
//     return input.length;
//   } else if (typeof input === 'string') {
//     return input.toUpperCase();
//   } else if (typeof input === 'number') {
//     return input.toFixed(2);
//   } else {
//     return 'Not a valid input.'
//   }
// }

// processInput("hello"); // Outputs: HELLO
// processInput(42); // Outputs: 42.00
// processInput([1, 2, 3]); // Outputs: 3

// interface Animal {
//   name: string;
//   makeNoise(): void;
// }

// interface DogType extends Animal {
//   tailLength: number;
//   makeNoise(str?: string): string;
// }

// class Dog implements DogType {
//   constructor(public name: string, public tailLength: number) {}

//   makeNoise(str?: string): string {
//     return 'hello';
//   }
// }


// type RAUser = Readonly<User>;

// let raUser: RAUser = {
//   name: "Ralph",
//   age: 27,
// }

// let arr = [1, 2, 3, 'hello'] as const;

// let ra: ReadonlyArray<number> = [1, 2, 3];

// interface User {
//   name: string;
//   age: number;
// }

// type MyPick<T, K extends keyof T> = {
//   [P in K]: T[P];
// }


// type NewUser = MyPick<User, "name">;

// let use: NewUser = {
//   name: "hal",
// }

// interface CarInfo {
//   bodyType: "sedan" | "hatchback" | "coupe" | "convertible" | "wagon";
//   numDoors: 2 | 4;
// }

// interface TruckInfo {
//   bodyType: "pickup" | "box";
//   numWheels: 4 | 6 | 8;
//   payloadCapacity: number;
// }

// type Vehicle = {
  
//   model: string;
//   year: number;
// } & (CarInfo | TruckInfo);

// interface Shape {
//   color: string;
// }

// interface Rectangle extends Shape {
//   length: number;
//   width: number;
// }

// interface Circle extends Shape {
//   radius: number;
// }


// function displayShapeInfo(shape: Shape): string {
//   return `The shape is ${shape.color}`;
// }

// type Person = {
//   name: string;
//   age: number;
// }

// // type Mammal = {
// //   breed: string;
// //   age: number;
// // }

// // let person: Person = { name: "Hanna", age: 28 };
// // let cow: Mammal = { ...person, breed: 'cow' };

// interface Options {
//   gender?: string;
//   gay?: boolean;
// }

// function describe({ name, age }: Person, { gender = 'female', gay = false }: Options = {}) {
//   let isGay = gay ? 'totes gay!!' : 'not gay';

//   console.log(`The ${gender} person, named ${name} is ${age} years older and ${isGay}!`)
// }

// describe({name: 'Sam', age: 27 }, {});
// describe({name: 'Grant', age: 30}, {gender: 'male', gay: true });

// interface NameOptions {
//   firstName?: string;
//   lastName?: string;
//   title?: string;
// }

// function formatName({
//   firstName = 'John',
//   lastName = 'Doe',
//   title
// }: NameOptions = {}) {
//   title = title ? `${title} ` : '';
//   return `${title}${firstName} ${lastName}`;
// }

// const formattedName = formatName({
//   firstName: "Jane",
//   lastName: "Smith",
//   title: "Dr.",
// });

// console.log(formattedName);
// console.log(formatName({}));

// class MyCustomError extends Error {
//   constructor(message: string) {
//     super(message);
//   }
// }

// try {
//   throw new MyCustomError("Ahhhh! AhhhhhHH!!!!");
// } catch (e: unknown) {
//   if (e instanceof MyCustomError) {
//     console.log(e.message);
//   } else if (typeof e === 'string') {
//     console.log(e);
//   } else {
//     throw new Error("An unkown error has occurred: " + JSON.stringify(e))
//   }
// }

// function sqrt(x: number): number {
//   if (x < 0) {
//     throw new Error("Cannot calculate square root of a negative number");
//   }
//   return Math.sqrt(x);
// }

// function safeSqrt(x: number): number {
//   try {
//     let result = Math.sqrt(x);
//     return result;
//   } catch (e: unknown) {
//     if (e instanceof Error) {
//       return -1;
//     } else {
//       throw e;
//     }
//   }
// }

// const promise1: Promise<number> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(7);
//   }, 1000);
// });

// const promise2: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(7);
//   }, 1000)
// }).then(result => {
//   return "Hello Dolly";
// });

// const promise3: Promise<Array<boolean>> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(7);
//   }, 1000);
// }).then(result => {
//   return "This is a string"
// }).then(str => {
//   return [true, false, true, false, true, false];
// })

// async function retrieveString(): Promise<string> {
//   const stringPromise: Promise<string> = new Promise((resolve) => {
//     setTimeout(() => "Launch School", 1000);
//   });

//   const stringResult: string = await stringPromise;
//   return stringResult;
// }

// function getData(url: string) {
//   return new Promise((resolve) => {
//     const xhr: XMLHttpRequest = new XMLHttpRequest();
//     xhr.open('Get', url);
//     xhr.responseType = 'json';
//     xhr.send();

//     xhr.onload = function(): void {
//       resolve(xhr.response);
//     }
//   });
// }


// class MyCustomError extends Error {
//   constructor(message: string) {
//     super(message);
//   }
// }

// async function getData(url: string): Promise<void> {
//   try {
//     const response: Response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (e: unknown) {
//     if (e instanceof Error) {
//       console.error(e.message);
//     } else if (typeof e === 'string') {
//       console.error(e);
//     } else {
//       throw new Error("Not equipped to handle this error");
//     }
//   }
// }

// let promise = Promise.reject('Ahhhh').catch((e: unknown) => {
//   if (typeof e === 'string') {
//     throw new Error(e);
//   } else if (e instanceof Error) {
//     throw new Error(e.message)
//   } else {
//     throw new Error("Unknown error: " + JSON.stringify(e));
//   }
// });

// async function catchRejection() {
//   try {
//     const response: Promise<string> = Promise.reject('Boo');
//     const data: string = await response;
//     return data;
//   } catch (e: unknown) {
//     if (e instanceof Error) {
//       console.log(e.message);
//     } else if (typeof e === 'string') {
//       console.log(e);
//     } else {
//       throw new Error('Unknown Error: ' + JSON.stringify(e));
//     }
//   }
// }

// type mySuperFunction = () => void;

// const newfunc: mySuperFunction = (): string => {
//   return 'hi';
// }

// interface TellMe {
//   anotherFunk(opt?: string): string;
// }

// class First {
//   name: string;

//   constructor(name: string) {
//     this.name = name 
//   }

//   somefunc(): string {
//     return 'hi'
//   }
// }

// class Second extends First implements TellMe {
//   anotherFunk(str?: string): string {
//     return 'hi'
//   }
  
// }


// function getValue(str: string, num: number): (string | number)[] {
//   return [str, num];
// }

// type getValueFunction = typeof getValue;
// type getValParams = Parameters<getValueFunction>;
// type getValReturnType = ReturnType<getValueFunction>;

// getValue(...['hello', 7]);

// function useValue([string, number]: getValParams): getValReturnType {
//   return [string, number];
// }



// useValue(['hi', 25]);

// // let x: string | undefined;
// // let y: string = x!;

// // let jsonData = '{"name": "JD"}';
// // let z: number = JSON.parse(jsonData);


// function newFunk(...arg: string[]): string {
//   if (arg.length === 0) {
//     return arg[0];
//   } else {
//     return 'Array is empty.'
//   }
// }

// function sum(prefix: string, ...numbers: number[]): string {
//   const total = numbers.reduce((total, n) => total + n, 0);
//   return `${prefix}${total}`;
// }

// type SumParameters = Parameters<typeof sum>;

// const input: SumParameters = ["The total is: ", 1, 2, 3, 4];
// const result = sum(...input);

// console.log(result); // Output: The total is: 10

// type myTuple = [str: string, ...numbers: number[]];

// let tup: myTuple = ['hello', 1, 2, 3, 4, 5]

// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

// type AddNumbersParams = Parameters<typeof addNumbers>;
// type AddNumbersReturnType = ReturnType<typeof addNumbers>;

// type AddNumbersFunction = (...args: AddNumbersParams) => AddNumbersReturnType;

// type newAddNumbersFunction = typeof addNumbers;

// const myFunction: AddNumbersFunction = function(...args: AddNumbersParams): AddNumbersReturnType {
//   return args[0] + args[1];
// }

// myFunction(1, 2);


// type myTuple = [str: string, num: number, bool: boolean];

// let tup: myTuple = ["Launch School", 1, true];

// type newFunkFunction = (...args: myTuple) => void;

// const newFunk: newFunkFunction = function(...[str, num, bool]: myTuple): void {
//   console.log(str, num, bool);
// }

// newFunk("Hello", 42, true);


// function myFunkyFunc(...[val1, ...val2]: number[]) {
//   console.log(val1);
//   console.log(val2);
// }

// myFunkyFunc(1, 2, 3, 4, 5, 6, 7);

// function myFunk(...[str, val, isTrue]: [string, number, boolean]) {
//   console.log(str, val, isTrue);
// }



// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

// const products: Product[] = [
//   {
//     // Let's just simply assume product id is same as the index of the product in the products array
//     id: 0,
//     name: "Sample Product",
//     price: 49.99,
//     description: "A sample product for demonstration",
//   },
// ];


// // This type helps us define which fields of a Product are updatable
// // by omitting the 'id' field and checks nullable
// type UpdateableProductFields = {
//   [K in keyof Omit<Product, "id">]?: Product[K];
// };

// function updateProduct(
//   productId: number,
//   updatedValues: UpdateableProductFields
// ): void {
//   let product: Product | undefined = products.find(({id}) => id === productId);
//   let idx: number;

//   if (product) {
//     idx = products.indexOf(product);
//     products[idx] = {...product, ...updatedValues};
//   } else {
//     console.log("Product not found");
//   }
// }

// updateProduct(0, {
//   name: "Updated Product Name",
//   price: 99.99,
// });

// console.log(products);

// updateProduct(0, {name: "Hello World"});

// console.log(products);

// updateProduct(1, {});


// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   makeNoise(): void {
//     console.log('Some noise.')
//   }
// }

// class Dog extends Animal {
//   age: number;

//   constructor(name: string, age: number) {
//     super(name);
//     this.age = age;
//   }

//   makeNoise(str?: string): void {
//     if (str !== undefined) {
//       console.log(str);
//     } else {
//       console.log("Howdy, I'm a pup");
//     }
//   }
// }

// let dog: Dog = new Dog('Ralph', 7);

// dog.makeNoise('hello');
// dog.makeNoise();

// type myFunction = () => void;

// const myFunc: myFunction = (str?: string): void => {
//   if (str !== undefined) {
//     console.log(str);
//   } else {
//     console.log("Howdy, I'm a pup");
//   }
// }

// myFunc('hello'); 

// type Person = {
//   name: string;
//   age: number;
//   email: string;
// }

// const jd: Person = {
//   name: "JD",
//   age: 27,
//   email: "myemail@gmail.com",
// }


// type PandNum = Person & {
//   number: number;
// }


// const panda: PandNum = Object.assign({}, jd, {number: 21})

// let arr: Array<number> = [1, 2, 3] as const;


// let num: number = arr[4]


// type myTuple = [string, number];

// let tup: myTuple = ['hello', 1];


// window.addEventListener('click', event => {
//   console.log(event.clientY);
// });

// function hello(): void {
// }

// function combine<T>(arg1: T, arg2: T): T {
//   if (typeof arg1 === 'string' && typeof arg2 === 'string') {
//     return arg1.concat(arg2) as T;
//   } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
//     return arg1 + arg2 as T;
//   }

//   throw new Error(
//     "Invalid input types: both inputs must be strings or both inputs must be numbers."
//   );
// }
