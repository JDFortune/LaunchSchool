// // let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// // // function greet(name: string): void {
// // //   console.log(`Hello, ${name}! Today is ${weekdays[new Date().getDay()]}!`);
// // // }


// // interface ID {
// //   name: string;
// //   fit: boolean;
// // }

// // type face = number | string;

// // let str = "hello";
// // str = "goodbye";

// // let newStr: "who" | "what" = "what";
// // newStr = "who"
// // // greet("Hello");

// // type Method = "GET" | "POST"

// // let obj = { x: "GET", y: 'hello' as string};
// // obj.y = "POST";

// // interface myObj {
// //   [key: string]: any;
// // }

// // interface CoordinateObj {
// //   x: number;
// //   y: number;
// // }

// // function myCoordinates(coord: CoordinateObj) {
// //   console.log(coord.x, coord.y);
// // }

// // myCoordinates({x: 1, y:2});

// // let newObj: myObj = {};
// // newObj.one = 1;
// // newObj.two = 2;
// // newObj.three = 3;

// // console.log(newObj);
// // // type Something = number;

// // let thing: string;
// // thing = "thong";

// // let empty: null;
// // empty = null;

// // // let x: Something = 5

// // // greet('JD');

// // type MyArr = number | string | undefined;
// // let arr: (any)[] = [];
// // arr.push(true);


// // type PossibleFruits = "apple" | "banana" | "pear" | "peach"
// // type NotPeach = Exclude<PossibleFruits, "peach">;

// // let fruit: NotPeach;
// // fruit = "apple";


// // type AnyAndAll = any | boolean;
// // type NotBoolean = Exclude< number | string | boolean, boolean>;

// // let notThis: NotBoolean;
// // notThis = 'hello';
// // let myName: string = 'Hello';

// // function greetings(name?: string): string {
// //   return name ? `Hello, ${name}!` : `Hello, World!`;
// // }

// // console.log(greetings()); // Output: Hello, World!
// // console.log(greetings("Pete")); // Output: Hello, Pete!

// // type myFunction = (value: number, index: number, array: any[]) => any;


// // function convertToNumbers(arr: string[]): number[] {
// //   return arr.map(Number);
// // }

// // console.log(convertToNumbers(['10', '20', '30', '40']));

// // function returnVoid(): void {};

// // let myVoid: void = returnVoid();

// // function logSum(a: number, b: number): void {
// //   const sum = a + b;
// //   console.log("The sum of", a, "and", b, "is", sum);
// // }

// // type ObjectKey =
// //   | "userId"
// //   | "postId"
// //   | "id"
// //   | "userName"
// //   | "postName"
// //   | "myIDWord";

// // type NonIdKey = Exclude<ObjectKey, `${string}${"id" | "Id" | "ID"}${string}`>

// // type Operation = "add" | "subtract" | "multiply" | "divide";

// // function calculate(operation: Operation, a: number, b: number) {
// //   switch (operation) {
// //     case "add":
// //       return a + b;
// //     case "subtract":
// //       return a - b;
// //     case "multiply":
// //       return a * b;
// //     case "divide":
// //       return a / b;
// //     default:
// //       throw new Error("Invalid operation");
// //   }
// // }

// // let thisObject: { name: string, age: number} = {
// //   name: 'JD',
// //   age: 34,
// // }

// // type GreetFunction = (name?: string) => string;

// // const greet: GreetFunction = (walk) => {
// //   return walk ? `Hello, ${walk}!` : `Hello, World!`;
// // };

// // greet(); // Hello, World!
// // greet("Catherine"); // Hello, Catherine!
// // greet(8); // Argument of type 'number' is not assignable to parameter of type 'string'.

// type NumStr = number | string;

// function myFunc(arg: NumStr): number | string | undefined {
//   if (typeof arg === 'string') {
//     return arg
//   } else if (typeof arg === 'number') {
//     return 'a'
//   }
// }

// type First = number | string | boolean;

// type Second = Exclude<First, string>


// type First = {
//   name: string,
//   age: number,
//   cool: boolean,
// }

// function createType(object, value, typeName) {
//   type typeName = Omit<object, value>;
// }


// type Student = { name: string; age: number; gpa: number };
// type Employee = { name: string; age: number };

// let jane: Student = { name: "Jane Doe", age: 30, gpa: 4.0};
// let engineer: Employee = jane;

// console.log(engineer.gpa);

// type Employee = { name: string; age: number };
// const jane: Employee = { name: "Jane Smith", age: 30, gpa: 4.0 };

// type Person = {
//   name: string;
//   age: number;
//   email?: string;
// }

// interface UserInfo {
//   name: string;
//   email?: string;
//   age?: number;
// }

// function displayUserInfo(user: UserInfo): string {
//   const email = user.email ? user.email : "N/A";
//   const age = user.age ? user.age : "unknown";

//   return `Name: ${user.name}, Email: ${email}, Age: ${age}`;
// }

// interface InterfaceName {
//   readonly propertyName: string;
// }

// type Thing = {
//   readonly property: string;
// }

// interface User {
  // readonly id: number;
  // name: string;
  // email: string;
// }
// 
// const user: User = { id: 123, name: "John Doe", email: "johndoe@example.com" };
// 
// user.id = 456; // Error: Cannot assign to 'id' because it is a read-only property.
// user.name = "Jane Doe" // Okay
// user.email = "janedoe@example.com";
// 
// let arr: ReadonlyArray<string> = ['1', '2', '3'];

// type Student = {
//   id: number;
//   name: string;
// }

// const students: ReadonlyArray<Student> = [
//   {id: 1, name: 'Karis'},
//   {id: 2, name: 'Pete'},
//   {id: 3, name: 'Victor'},
// ]

// function getStudentNames(
//   students: ReadonlyArray<Student>
// ): ReadonlyArray<string> {
//   return students.map((student) => student.name);
// }

// const names = getStudentNames(students);
// console.log(names);

// students.push({ id: 4, name: "David" });
// names.push("Jessica");

// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// function movePoint(point: Point, dx: number, dy: number): Point {
//   return {
//     x: point.x + dx,
//     y: point.y + dy,
//   }
// }

// let str: unknown = 'hello';
// let myStr: string = str as string;
// myStr.length;

// let notKnown: unknown = myStr;
// notKnown.length;


// let age: number | string = 30;
// age = (age as unknown as string).length;
// console.log(age);

// type Animal = {
//   name: string;
//   makeNoise(): string;
// }

// class Dog implements Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   makeNoise(): string {
//     return `${this.name} says Woof!`;
//   }

//   run(): string { // you can build off of an implemented interface
//     return 'I am running';
//   }
// }

// const fido = new Dog("Fido");
// console.log(fido.makeNoise()); // Outputs: "Fido says Woof!"

// class Cat implements Animal {
//   // Class 'Cat' incorrectly implements interface 'Animal'.
//   //  Property 'makeNoise' is missing in type 'Cat' but required in type 'Animal'.
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const whiskers = new Cat("Whiskers");
// console.log(whiskers.makeNoise()); // Compile-time error!

// type Person = () => void;

// let makePerson: Person = (friend?: string) => {
//   `Hello ${friend}. My name is JD`;
// }

// type sayHelloMethod = () => void;

// const sayHello: sayHelloMethod = () => {
//   console.log('Hello');
// }

// const greetFriend: sayHelloMethod = (friend: string) => {
//   console.log(`Hello ${friend}. My name is Me!`);
// }// Error: type '(friend: string) => void' is not assignable to type 'SayHelloMethod'

// // but if we make the parameter `friend` optional, it can work
// const maybeGreetFriend: sayHelloMethod = (friend?: string) => {
//   if (friend) {
//     console.log(`Hello ${friend}. `);
//   }
//   console.log('My name is JD');
// }

// maybeGreetFriend('hello');

// type greetMethod = (friend: string) => void;

// const greetFriend: greetMethod = (friend: string) => {
//   console.log('Hello, ' + friend);
// }

// const greetFriends: greetMethod = (friend: string[] | string) => {
//   if (Array.isArray(friend)) {
//     friend[friend.length - 1] = 'and ' + (friend as Array<string>).at(-1);
//     friend = friend.join(', ')
//   }

//  greetFriend(friend);
// }


// greetFriends('John');

// greetFriends(['Rachel', 'Ross', 'Chandler', 'Joey', 'Monica', 'Diane']);

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   sayName(): void {
//     console.log(`My name is ${this.name}.`);
//   }
// }

// class Student extends Person {
//   semester: string;

//   constructor(name: string, age: number, semester: string) {
//     super(name, age);
//     this.semester = semester;
//   }

//   enrollInCourse(courseNumber: string): void {
//     console.log(`${this.name} has enrolled in course ${courseNumber}.`);
//   }

//   sayName(friend?: string): void {
//     if (typeof friend === "string") {
//       console.log(`Hi ${friend.toUpperCase()}!! My name is ${this.name}.`);
//     } else {
//       super.sayName();
//     }
//   }
// }


// let student: Student = new Student("Kim", 22, "Fall");
// student.sayName("Jerry"); // logs 'Hi JERRY!! My name is Kim.'

// let person: Person = new Student("Kim", 22, "Fall");
// person.sayName(); // 'My name is Kim.'

// class Person {
//   age?: number;
//   name: string;

//   constructor(age?: number, name: string) {
//     this.name = name;
//     this.age = age;
//   }
// }

// interface Movable {
//   speed: number;
//   move(): void;
// }

// class Car implements Movable {
//   speed: number

//   constructor(speed: number) {
//     this.speed = speed;
//   }

//   move() {
//     console.log(`The car is moving at ${this.speed} km/h.`);
//   }

// }


// let book: number | 'hello';
// book = 'hello';
// book = 9;


// type Dog = { breed: string; age: number };
// type Cat = { breed: string; age: number; whiskerLength: number };

// type Pet = Cat | Dog;


// let myCat: Cat = { breed: "Siamese", age: 7, whiskerLength: 9};
// // let myPet: Pet = myCat;
// let myPet: Pet = { breed: "Siamese", age: 7, whiskerLength: 9};

// console.log(myPet.whiskerLength);

// myPet;

// function assignValueToMyString(myUnion: string | boolean) {
//   let myString: string;
//   if (typeof myUnion === "string") {
//     myString = myUnion;
//   }
// }

// type myMethod = (name: string) => void;

// const aNewMethod: myMethod = (name) => {
//   console.log(name);
// }

// aNewMethod('Sam');

// type Dog = { breed: string; age: number };
// type Cat = { breed: string; age: number; whiskerLength: number };

// type Pet = Dog | Cat;

// function meetPet(pet: Pet) {
//   console.log(`This is a ${pet.age} year old ${pet.breed}`); // ok
//   if ('whiskerLength' in pet) {
//     console.log(`My pet has whiskers ${pet.whiskerLength} inches long.`);
//   }
  // Property 'whiskerLength' does not exist on type 'Pet'.
  // Property 'whiskerLength' does not exist on type 'Dog'.
// }

// type Value = string | number;

// function combine(a: Value, b: Value): Value | void {
//   if (typeof a === 'string' && typeof b === 'string') {
//     return a.concat(b);
//   } else if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else {
//     throw new Error("invalid input types: both inputs must be strings or both must be numbers.");
//   }
// }


// type StrArr = string | string[] | number;

// let a: StrArr = 'abc';
// let b: StrArr = ['a', 'b', 'c'];



// function getLengthOfArray(value: string[]): number;
// function getLengthOfArray(value: string): string;
// function getLengthOfArray(value: string | string[]): number | string {
//   if (Array.isArray(value)) {
//     return value.length;
//   } else {
//     return "Not an array!";
//   }
// }

// let c: StrArr = getLengthOfArray(b);

// function getLengthOfArray(value: string[]): number;
// function getLengthOfArray(value: string): string;
// function getLengthOfArray(value: string | string[]): number | string {
//   if (Array.isArray(value)) {
//     return "hello" // value.toString(); // no error!
//   } else {
//     return "Not an array!";
//   }
// }

// const numberResult: number = getLengthOfArray(["a", "b", "c"]);
// console.log(numberResult); // "a,b,c"
// type StrNum = string | number;

// function combine(input1: string, input2: string): string;
// function combine(input1: number, input2: number): number;
// function combine(input1: StrNum, input2: StrNum): StrNum {
//   if (typeof input1 === "string" && typeof input2 === "string") {
//     return input1.concat(input2);
//   } else if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2;
//   } else {
//     throw new Error("Inputs must both be strings or must both be numbers");
//   }
// }


// function combine<one, two>(input1: one, input2: two): one | two {
//   if (typeof input1 === "string" && typeof input2 === "string") {
//     return input1.concat(input2) as one;
//   } else if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2 as two;
//   } else {
//     throw new Error("Inputs must both be strings or must both be numbers");
//   }
// }

// let num: number = combine<number, number>(1, 2);
// let str: string = combine<string, string>('hello', 'sir');




// const concatenated: string = combine("Hello, ", "Word!");
// const added: number = combine(5, 10);


// function identity<T>(arg: T): T {
//   return arg;
// }

// let number: number = identity(4);

// let str = identity<string>('4');


// function thisOrThat<A, B>(arg1: A, arg2: B): A | B {
//   if (typeof arg1 === "string") {
//     return arg1.slice() as A;
//   } else {
//     return arg2;
//   } 
// }



// let value: number | boolean = thisOrThat(5, false);

// let arr: ReadonlyArray<number | string> = [1, "2", 3];

// let tuple: [string, number, boolean] = ["LaunchSchool", 2, true];


// function second(): HTMLInputElement {
//   return document.createElement('input');
// }

// let e: HTMLElement = second();


// let numArray = [1, 2, 3, 4, 5];
// let strArray = ['a', 'b', 'c', 'd', 'e'];

// function first<T>(arr: T[]): T {
//   return arr[0];
// }

// let firstNum = first<number>(numArray);
// let firstStr = first<string>(strArray);


// let str: 'hello' = 'hello';
// str = str.concat('');

// function pair<T>(arg1: T, arg2: T): T[] {
//   return [arg1, arg2];
// }

// type User<T> = {
//   name: string;
//   age: T;
// }

// const user1: User<number> = {
//   name: "John",
//   age: 30,
// }

// const user2: User<string> = {
//   name: "Rachel",
//   age: "thirty",
// }

// const user3: User<number> = {
//   name: "JD",
//   age: 32,
// }

// type KeyValuePairs<T, U> = {
//   key: T;
//   values: U[];
// };

// const myPairs: KeyValuePairs<string, number> = {
//   key: "Numbers",
//   values: [1, 2, 3, 4, 5],
// };

// const yourPairs: KeyValuePairs<number, string> = {
//   key: 42,
//   values: ["One", "Two", 3, "Four"],
// };

// type FruitNames = "apple" | "banana" | "cherry";
// const fruits: Array<FruitNames> = ["apple", "banana", "mango"];

// type Dog = { breed: string; mark: number}
// type Cat = { breed: string; whiskers: boolean };

// type Pet = Dog | Cat;

// let cat: Cat = { breed: 'yes', whiskers: false};

// let anything: Pet = { breed: 'siamese', mark: 4 };
// anything

// let myPet: Pet = cat;

// myPet.whiskers; // Whiskers doesn't exist on type Pet (because its a Union of Cat and Dog; it only has breed)
// // myPet.breed;

// type Circle = {
//   color: string;
//   radius: number;
// }

// type Square = {
//   color: string;
//   sideLength: number;
// }

// type Shape = Circle | Square;

// function describeShape(shape: Shape) {
//   let area: number;
//   console.log("This shape is " + shape.color);

//   area = 'radius' in shape ? 
//     shape.radius * shape.radius * Math.PI :
//     shape.sideLength ** 2;

//   console.log("The area is " + area);
// }

// function findItems(): Array<Array<string>> {
//   let labels: NodeListOf<HTMLLabelElement> = document.querySelectorAll('label');
//   let checked: string[] = [];
//   let unchecked: string[] = [];

//     labels.forEach(label  => {
//         let itemText: string = (label.lastElementChild as HTMLSpanElement).innerText;
//         let checkbox: HTMLInputElement = label.firstElementChild as HTMLInputElement;

//         if (checkbox) {
//           if (checkbox.hasAttribute('checked')) {
//             checked.push(itemText);
//           } else {
//             unchecked.push(itemText);
//           }
//         }
//     });

//   return [checked, unchecked];
// }

// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     x.toUpperCase();
//     y.toUpperCase();
//   } else {
//     console.log(x);
//     console.log(y);
//   }
// }

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }

// function getSmallPet() {
//   if (Math.random() > 0.5) {
//     return { swim: () => {} } as Fish;
//   } else {
//     return { fly: () => {} } as Bird;
//   }
// } 

// let animal = getSmallPet();

// if (isFish(animal)) {
//   animal.swim();
// } else {
//   animal.fly();
// }


// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// interface Square {
//   kind: "square";
//   sideLength: number;
// }

// interface Triangle {
//   kind: "triangle";
//   sideLength: number;
// }

// type Shape = Circle | Square | Triangle;

// let circ: Shape = {
//   kind: "circle",
//   radius: 2
// }

// let sq: Shape = {
//   kind: "square",
//   sideLength: 2
// }


// circ;
// sq;

// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return shape;
//     // return Math.PI * shape.radius ** 2;
//   } else {
//     return shape;
//     // return shape.sideLength ** 2;
//   }
// }


// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exaustiveCheck: never = shape;
//       return _exaustiveCheck;
//   }
// }

// let val: number = getArea({kind: "triangle", sideLength: 5})

// class Circle {
//   constructor(public radius: number) {}
// }

// class Square {
//   constructor(public sideLength: number) {}
// }

// class Triangle {
//   constructor(public sideLength: number) {}
// }

// type Shape = Circle | Square | Triangle;

// function describeShape(shape: Shape): void {
//   if (shape instanceof Circle) {
//     console.log("This is a circle with radius:", shape.radius);
//   } else {
//     console.log("This is a square with side length:", shape.sideLength);
//   }
// }

// type Video = {
//   title: string;
//   creator: string;
//   length: number;
// };

// function printVideoInfo(videoOrVideos: Video | Video[]) {
//   if ("length" in videoOrVideos) {
//     videoOrVideos.forEach((v) =>
//       console.log(`"${v.title}" by ${v.creator}`)
//     );
//   } else {
//     console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
//   }
// }

// printVideoInfo({
//   title: "Introduction to TypeScript",
//   creator: "John Doe",
//   length: 100,
// });

// let arr = [1, 2, 3, 4] as const;
// type NumberValues = typeof arr[number];

// type Elephant = {
//   kind: "elephant";
//   weight: number;
// }

// type Tiger = {
//   kind: "tiger";
//   speed: number;
// }

// type Peacock = {
//   kind: "peacock";
//   featherLength: number;
// }

// type Giraffe = {
//   kind: "giraffe";
//   neckLength: number;
// }

// type Animal = Elephant | Tiger | Peacock | Giraffe;

// function describeAnimal(animal: Animal): string {
//   let message: string = `The animal is a ${animal.kind}. `
//   switch (animal.kind) {
//     case "elephant":
//       return message + `It's weight is ${animal.weight} kg.`
//     case "tiger":
//       return message + `It's speed it ${animal.speed} mph.`
//     case "peacock":
//       return message + `It's feather length is ${animal.featherLength} inches.`
//     default:
//       const _exhaustiveCheck: never = animal;
//       throw new Error(JSON.stringify(_exhaustiveCheck));
//   }
// }

// let num: number = 42;
// let misc: any = 'hello' as any;

// num = misc;
// num

// let isStudent: any = true;
// let school: string = isStudent;
// console.log(school.toLowerCase()); // school contains a boolean right now, this will be a runtime error

// type Student = {
//   id: number;
//   name: string;
// }

// function greetStudent(student: any) {
//   console.log(`Hello, ${student.fullname}!`);
// }

// const student: Student = { id: 1, name: "Antonina" };
// greetStudent(student); // Outputs "Hello, undefined!"

// type Input = string | number | { length: number };

// function processInput(input: Input) {
//   if (typeof input === 'string') {
//     console.log(input.toUpperCase());
//   } else if (typeof input === 'number') {
//     console.log(input.toFixed(2));
//   } else if ("length" in input) {
//     console.log(input.length);
//   }
// }

// processInput("hello");
// processInput(42);
// processInput([1, 2, 3]);

// let x: string = "Launch School";
// const y: number = x as any as number;

// let numbers = [1, 2, 3] as const;
// type NumberType = typeof numbers[number];

// interface KeyObj {
//   one: number;
//   two: number;
//   three: number;
// }

// let keys: KeyObj = { 'one': 1, 'two': 2, 'three': 3} as const;
// type KeyT = keyof typeof keys;
// type Str = 'one' | 'two' | 'three';
// type ValueT = typeof keys[Str]
// type ValueType = typeof keys[keyof typeof keys];
// type NewThing = keyof KeyObj;
// let aThing: NewThing = 'two';


// let myTup: [string, number, boolean] = ["Launch School", 1, true];

// const names: string[]= ["John", "Jane"] as const;
// const namer: string = names[2];
// namer; // undefined

// function isNumber(value: any): value is number {
//   return typeof value === 'number';
// }

// // example 1
// let x: any = "Launch School";
// if (isNumber(x)) {
//   const y: number = x;
//   console.log(y);
// }

// let xx: any = "Launch School";
// if (isNumber(xx)) {
//   const xy: number = x as number;
//   console.log(xy);
// }

// function safeGet<T>(arr: T[], index: number) {
//   if (index >= 0 && index < arr.length) {
//     return arr[index];
//   }
//   return undefined
// }

// let mystery: unknown = 5 as number;

// function processValue(value: unknown) {
//   if (typeof value === 'string') {
//     console.log(value.toLowerCase());
//    let strValue: string = value;
//     console.log(strValue);
//   } else if (typeof value === 'number') {
//     console.log(value.toFixed(2));
//   }
// }


// function processData(data: unknown): string {
//   if (typeof data === 'string') {
//     return 'Hello, ' + data;
//   } else if (typeof data === 'number') {
//     return 'Age: ' + data;
//   } else {
//     throw new Error('Invalid Data');
//   }
// }

// console.log(processData("Alice")); // Should print: "Hello, Alice"
// console.log(processData(25)); // Should print: "Age: 25"
// console.log(processData(true)); // Should throw an error: "Invalid data"

// type Shape = "circle" | "square" | "triangle";

// interface PaintOptions {
//   shape: Shape;
//   xPos?: number;
//   yPos?: number;
// }
 
// function getShape() {
//   return "circle" as Shape;
// }

// function paintShape(opts: PaintOptions) {
//   let xPos = opts.xPos === undefined ? 0 : opts.xPos;
//   let yPos = opts.yPos === undefined ? 0 : opts.yPos;
// }
 
// const shape = getShape();
// paintShape({ shape });
// paintShape({ shape, xPos: 100 });
// paintShape({ shape, yPos: 100 });
// paintShape({ shape, xPos: 100, yPos: 100 });

// interface Shape {
//   width: number;
// }

// function go(shape: Shape) {
//   console.log("Hi");
// }

// let obj = {width: 9, height: 7}

// go({width: 9, height: 7} as Shape)


// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }

// let myObj: SquareConfig = { color: "red", width: 9, backgammon: true };

// type StringNumberBooleans = [string, number, ...boolean[]];

// let myTup: StringNumberBooleans = ["hello", 4, true, true, true];

// myTup.length;

// interface Thing<Type> {
//   [key: string]: Type
// }

// let one: Thing<number> = { 'one': 1, 'two': 2 }


// interface MyInterface {
//   first: number;
//   second(): void;
// }



// let myObj: MyInterface;

// function isGood(obj: any): obj is MyInterface {
//   return true;
// }

// myObj= (isGood(myObj)) ? {
//     first: 10,
//     second: () => console.log('hello'),
//     third: 10,
//   } : {} as unknown as MyInterface

// interface DogInterface {
//   name: string;
//   bark(): void;
// }

// class Dog {
//   name: string; 

//   constructor(name: string) {
//     this.name = name;
//   }

//   bark() {
//     console.log(`${this.name} says woof!`);
//   }
// }

// let dog: Dog = new Dog('Ralph');


// let x: string = 'hello';
// let y: unknown;
// y = x;

// interface Dog {
//   kind: 'dog';
//   bark(): void;
// }


// interface Cat {
//   kind: 'cat';
//   meow(): void;
// }

// type Pet = Dog | Cat;

// function speak(pet: Pet): void {
//   switch (pet.kind) {
//     case "dog":
//       pet.bark();
//       break;
//     case "cat":
//       pet.meow();
//       break;
//     default:
//       const _exhaustiveCheck: never = pet;
//       throw new Error(JSON.stringify(_exhaustiveCheck));
//   }
// }

// interface Mammal {
//   id: string;
//   legs: string;
// }

// interface Dog extends Mammal {
//   id: 'dog';
//   mouth: boolean;
// }


// type A = string | number | boolean;
// type B = string | number;

// let strArr: string[] = ['I', 'am', 'Groot'];
// let myA: A = true;
// myA = strArr; // not possible strArr is type string[];

// let myB: B = 9;
// myA = myB; // this is fine myB is known to be a number

// // lets assign a type B to a type A making sure it's acknoweldged to be a union type
// //
// let myC: A = myB as B; // this is fine. `string | number` is a subset of `string | number | boolean`

// type Info = { name: string };

// interface Mammal {
//   id: Info;
// }

// interface Dog extends Mammal {
//   id: { name: string; breed: string}
// }

// interface AnimalType {
//   name: string;
//   makeSound(): string;
// }

// interface DogType extends AnimalType {
//   fetch(): string;
// }

// class Animal implements AnimalType {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   makeSound() {
//     return "Generic animal sound";
//   }
// }

// class Dog extends Animal implements DogType {
//   constructor(name: string) {
//     super(name);
//   }

//   fetch() {
//     return `${this.name} fetches a stick.`;
//   }
// }

// const myDog = new Dog("Rex");
// console.log(myDog.fetch());


// interface Animal {
//   name: string;
//   makeSound(): string;
// }

// interface DogType extends Animal {
//   fetch(): string;
// }

// class Dog implements DogType {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   makeSound() {
//     return `${this.name} says woof!`
//   }

//   fetch() {
//     return `${this.name} fetches.`
//   }
// }

// const dog: Dog = new Dog('Rex');

// type StrAndNum = Array<string | number> & Array<number>;

// let strNum: StrAndNum = [5];

// type Product = {
//   name: string;
//   price: number;
// };

// type Shipping = {
//   weight: number;
//   shippingCost: number;
// };

// interface ShippableProduct extends Product, Shipping {}

// let shipProd: ShippableProduct = {
//   name: "iphone",
//   price: 7,
//   weight: 7,
//   shippingCost: 1,
// }

// class ProductClass implements Product {
//   name: string;
//   price: number;

//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }

// interface Accounts {
//   [username: string]: UserProfile;
// }

// type UserProfile = {
//   name: string;
//   age: number;
//   email: string;
// };

// const userAccounts: Accounts = {
//   coolCoder123: {
//     name: "Ada Lovelace",
//     age: 27,
//     email: "ada@lovelace.com",
//   },
//   jsPro42: {
//     name: "Grace Hopper",
//     age: 32,
//     email: "grace@hopper.com",
//   },
// };


// interface MyJSONData {
//   [key: string]:
//     | string
//     | number
//     | boolean
//     | null
//     | MyJSONData
//     | MyJSONArray;
// }

// type MyJSONValue = MyJSONData[string];

// type MyJSONArray = Array<MyJSONValue>;

// interface Cat {
//   name: string;
//   age: number;
//   type: string;
//   shots: boolean;
// }

// type CatValues = Cat[keyof Cat];

// type User = Map<number, string>;

// let user: User = new Map();

// user.set(1, 'hello');
// user.set(2, 'goodbye');

// type CustomArray = {
//   [index: number]: string | number;
// };

// const customArray: CustomArray = ["apple", 42, "banana"];

// function processCustomArray(arr: CustomArray) {
//   if (Array.isArray(arr)) {
//     return arr.filter(el => typeof el === 'string')
//               .map(str => str.toUpperCase());
//   }

//   return [];
// }

// const result = processCustomArray(customArray);
// console.log(result);

// interface CustomObject {
//   [key: string]: unknown;
// }

// interface Person extends CustomObject {
//   firstName: string;
//   lastName: string;
// }

// function processObject(arg: CustomObject) {
//   if (typeof arg.firstName === 'string' && typeof arg.lastName === 'string') {
//     console.log(arg.firstName.toUpperCase());
//     console.log(arg.lastName.toUpperCase());
//   }
// }

// let person: Person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   sex: 'yes please!',
// }

// processObject(person);

// function doSomething(obj: CustomObject) {
//   for (const key in obj) {
//     const value = obj[key];

//     if (typeof value === 'string') {
//       console.log(value.toUpperCase());
//     } else if (typeof value === 'number') {
//       console.log(value.toFixed(2));
//     } else {
//       console.log('Unknown value type');
//     }
//   }
// }

// const myObject: CustomObject = {
//   name: "Alice",
//   age: 30,
//   unknownProperty: { key: "value" },
//   anotherUnknown: null,
// }

// doSomething(myObject);

// interface CustomObject {
//   [key: string]: unknown
// }

// // function getProperty(obj: CustomObject, key: string) {
// //   return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
// // }

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
// }  

// const obj = {
//   name: "JD",
//   age: 34,
// }

// const x = getProperty(obj, 'name');
// const y = getProperty(obj, 'age');

// console.log(`${x} is ${y}`);

// interface Animal {
//   name: string;
//   age: number;
// }


// function getAnimalProp(animal: Animal, key: keyof Animal) {
//   return animal[key];
// }

// let animal: Animal = {
//   name: "greg",
//   age: 32,
// }

// let x = getAnimalProp(animal, 'name');
// let y = getAnimalProp(animal, 'age');

// interface Dog extends Animal {
//   breed: string;
// }

// const dog: Dog = {
//   name: "BoBo",
//   age: 7,
//   breed: "Shepherd",
// }

// type DogKeys = keyof Dog;

// function getDogValue(dog: Dog, key: keyof Dog) {
//   return dog[key];
// }

// interface Student {
//   name: string;
//   age: number;
// }

// let key: keyof Student = "grade"; // error Type 'grade' is not assignable to type 'name' | 'age' (technically, although it will call it type 'keyof Student')

// interface Item {
//   name: string;
//   age: number;
// }

// function messWithItem<T extends Item>(item: T) {
//   console.log(item.name);
//   console.log(item.age);
// }

// let JD = { name: 'JD', age: 34 };

// let item: { age: number } = JD

// item.age;


// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// interface Item {
//   name: string;
//   age: number;
// }

// type itemKey = keyof Item;


// function myGeneric<T extends string | number>(value: T): void {
//   if (typeof value === 'string') {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value)
//   }
// }

// myGeneric('hello');

// function myOther(obj: { name: string }) {
//   console.log(obj.name);
// }

// let myObj = {age: 27, name: "JD"};

// myOther(myObj);


// interface Animal {
//   name: string;
//   breed: string;
// }

// // { name: string; breed: string }
// function myGenericFunction<T extends Animal>(animal: T) {
//   console.log(animal.breed);
// }

// myGenericFunction({name: "JD", breed: "Wolf", age: 27})

type Giraffe = {
  kind: 'giraffe';
  neck: number;
}

function hello(arg: Giraffe) {
  console.log('hello');
}

let myName: 'giraffe' = 'giraffe'

let giraffe: Giraffe = { kind: 'giraffe', neck: 30 };
hello(giraffe)