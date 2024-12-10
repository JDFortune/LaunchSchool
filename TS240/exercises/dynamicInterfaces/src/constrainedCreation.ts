// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const user = {
//   name: "John",
//   age: 30,
// }

// let userName = getProperty(user, 'name');
// let userAge = getProperty(user, 'age');


// type MyObject = { a: number; b?: string }; // b is optional

// const obj: MyObject = { a: 1 };

// const value: string | undefined = obj['b'];  // This will be treated as potentially undefined


// type AllColors = "red" | "green" | "blue" | "yellow" | "purple";
// type PrimaryColors = "red" | "green" | "blue";

// type SecondaryColors = Exclude<AllColors, PrimaryColors>;

// let myColor: SecondaryColors

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   isAdmin: boolean;
// }

// type PublicUserInfo = Pick<User, "name" | "email">;
// type AdminUserInfo = Omit<User, "isAdmin">;

// function fetchUserData(userId: number, includeDetails: boolean): Promise<User | null> {
//   return new Promise((resolve, reject) => {
//     if (userId > 2) {
//       resolve({} as User); 
//     } else {
//       resolve(null);
//     }

//   })
// }

// type FetchUserDataType = typeof fetchUserData;

// type FetchUserParams = Parameters<FetchUserDataType>;
// type FetchUserReturn = ReturnType<FetchUserDataType>;

// const users: User[] = [
//   {
//     id: 1,
//     name: "Jim",
//     email: "James",
//     age: 32,
//     isAdmin: false,
//   },
//   {
//     id: 2,
//     name: "Jones",
//     email: "Joons",
//     age: 33,
//     isAdmin: true,
//   }
// ]

// function updateUser(userId: number, newInfo: Partial<User>): void  {
//   const user = users.find(user => user.id === userId);type Obj1 = {
//   a: number;
//   b: string;
// }

// type Obj2 = {
//   b: number,
//   c: boolean,
// }

// const obj1 = { a: 1, b: "hello"};
// const obj2 = { b: 2, c: true }

// type Obj2Keys = typeof obj2[keyof Obj2];
// type Merged<T1, T2> = {
//   [K in Omit<T1, typeof T2[typeof keyof T2]>]: T[K]
// }

// function mergeObjects<T1, T2>(arg1: T1, arg2: T2): Omit<T1, keyof T2> & T2 {
//   return {...arg1, ...arg2}
// }
//   c: boolean,
// }

// const obj1 = { a: 1, b: "hello"};
// const obj2 = { b: 2, c: true }

// type Obj2Keys = typeof obj2[keyof Obj2];
// type Merged<T1, T2> = {
//   [K in Omit<T1, typeof T2[typeof keyof T2]>]: T[K]
// }

// function mergeObjects<T1, T2>(arg1: T1, arg2: T2): Omit<T1, keyof T2> & T2 {
//   return {...arg1, ...arg2}
// }

// function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
//   return { ...obj1, ...obj2 };
// }

// const merged = mergeObjects(obj1, obj2);

// if ('b' in merged) {
//   merged['b'].toFixed();
// }

// let no: never = 1 as never;

// interface Animal {
//   name: string;
//   species: string;
//   age: number;
// }

// interface Dog extends Animal {
//   species: 'dog';
//   bark: () => void;
// }

// let dog: Dog = {
//   name: 'hello',
//   species: 'dog',
//   age: 7,
//   bark: () => console.log('Woof!'),
// }

// dog.bark();

// let form = document.getElementById('myForm') as HTMLFormElement;

// new FormData(form);

// type IS = {
//   [key: string]: number | string;
//   [index: number]: string;
// }

// let is: IS = {
//   'hello': 1,
//   'goodbye': 2,
//   1: 'hello',
//   2: '3',
// }

// function hello(): string {
//   return "hello";
// }

// type HelloFunctionType = typeof hello

// type HelloReturn = ReturnType<HelloFunctionType>;


// function prepending(pre: string, opt?: string, ...rest: number[]): void {
//     rest.forEach(num => {
//       console.log(`${pre}${opt}${num}`);
//     });
// }

// function greetAll(greeting: string, name?: string, ...otherNames: string[]): void {
//   if (name) {
//     console.log(`${greeting} ${name}`);
//   } else {
//     console.log(greeting);
//   }

//   if (otherNames.length > 0) {
//     console.log("And hello to everyone else: " + otherNames.join(', '));
//   }
// }


// type greetAllFunction = typeof greetAll;

// type GreetAllParams = Parameters<greetAllFunction>;

// interface User {
//   name: string;
//   age: number;
//   email?: string;
// }

// const user: User = {
//   name: "John",
//   age: 32,
// }

// type PartialUser = Partial<User>;


// type Fruit = "apple" | "orange" | "banana";

// type USFruit = Exclude<Fruit, "banana">


// function say<T extends Array<string | number>>(word: T) {
//   console.log(word);
// }

// say(['hello', 1, 4])

// type MyValue = string | number | boolean;

// let val: "hi" = "hi";

// let val: "hi" | "there" = "hi";
// let thyne: string = val;
// val = thyne;

// function processValueGeneric<T extends string | number>(value: T): T {
//   if (typeof value === 'number') {
//       return (value * 2) as T;
//   } else {
//       return (value.toUpperCase()) as T;
//   }
// }

// let myValue = processValueGeneric(val);

// val = processValueGeneric(val);

// console.log('val', val);







///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// type NumNum = 5 | 10; // so sorry for this type name

// function combine<T extends string | number>(arg1: T, arg2: T): T {
//   if (typeof arg1 === 'string' && typeof arg2 === 'string') {
//     return arg1.concat(arg2) as T; // TypeScript now understands that T is string
//   } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
//     return (arg1 + arg2) as T; // TypeScript now understands that T is number
//   }

//   throw new Error(
//     "Invalid input types: both inputs must be strings or both inputs must be numbers."
//   );
// }

// let num1: NumNum = 5;
// let num2: NumNum = 10;
// let result1 = combine(num1, num2);
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////









// function processValueGeneric(value: string): string;
// function processValueGeneric(value: number): number;
// function processValueGeneric(value:  string | number): string | number {
//   if (typeof value === 'number') {
//       return value * 2;
//   } else {
//       return value.toUpperCase();
//   }
// }

// processValueGeneric(val) {}

// function getLengthOfArray(value: string | string[]): string | number {
//   if (Array.isArray(value)) {
//     return value.length;
//   } else {
//     return "Not an array"
//   }
// }


// Generic function to create an array of repeated elements
// function createArray<T>(element: T, length: number): T[] {
//   return Array.from({ length }, () => element);
// }

// const numberArray = createArray(5, 3); // Output: [5, 5, 5] - inferred type: number[]
// const stringArray = createArray("hi", 2); // Output: ["hi", "hi"] - inferred type: string[]

// console.log(numberArray);
// console.log(stringArray);

// function combine(a: string | number, b: string | number) {
//   if ((typeof a === 'string' && typeof b === 'string')) {
//     return a + b;
//   }
// }
// type MyType = {a: string; b: string};

// function getProperty(obj: MyType, prop: keyof MyType) {
//   if (prop in obj) {
//     console.log(obj[prop])
//   }
// }

// function combine(input1: string, input2: string): string;
// function combine(input1: number, input2: number): number;
// function combine(
//   input1: string | number,
//   input2: string | number
// ): string | number {
//   if (typeof input1 === "string" && typeof input2 === "string") {
//     return input1.concat(input2);
//   } else if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2;
//   } else {
//     throw new Error(
//       "Invalid input types: both inputs must be strings or both inputs must be numbers."
//     );
//   }
// }

// function first<T>(arr: T[]): T {
//     return arr[0]
// }

// let arr = [1, 'two'];

// let myReturn = first<number | string | boolean>(arr);

// interface Book {
//   title: string;
//   author: string;
//   publishYear: number;
//   pageCount: number;
//   isbn: string;
// }

// function updateBook(book: Book, updateInfo: Partial<Book>): Book {
//   return Object.assign(book, updateInfo);
// }


// type Fruits = "apple" | "banana" | "orange" | "grape" | "kiwi";
// type CitrusFruits = "orange" | "lemon" | "lime";

// type NonCitrusFruits = Exclude<Fruits, CitrusFruits>;

// function firstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }

// let val = firstElement([]);

// function mergeObjects<T extends object>(obj1: T, obj2: T ): T {
//   return {...obj1, ...obj2};
// }

// type BookSummary = Pick<Book, "title" | "author" | "publishYear">

// function createUser(name: string, age: number, isAdmin: boolean): void {
//   //
// }

// type CreateUserParams = Parameters<typeof createUser>;

// function getRandomNumber(): number {
//   return Math.random();
// }

// type RandomNumberType = ReturnType<typeof getRandomNumber>;

// type Employee = {name: string; age: number};
// type Student = Employee & { gpa: number };

// const jane: Student = { name: "Jane Smith", age: 30, gpa: 4.0 };
// const engineer: Employee = jane;
// const anotherJane: Student = engineer;

// anotherJane

// interface Animal {
//   name: string;
// }
// // implements is just a contract that Dog will create itself to model Anima, including AT LEAST all of its required members.
// class Dog implements Animal{
//   constructor(public name: string) {}

//   makeNoise(): string {
//     return 'Awoooo';
//   }
// }

// let animal: Animal = {
//   name: 'animal',
// }

// let dog: Dog = new Dog('dog');

// animal;
// dog;


// const person = { name: 'Alice', age: 25, city: 'Paris' };


// function pluck<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
//   if (typeof obj === 'object' && obj !== null) {
//     return keys.map(key => obj[key]);
//   }
//   return [];
// }

// const result = pluck(person, ['name', 'city']); // result: ['Alice', 'Paris']

// console.log(result);


// const result = flattenArray([1, [2, 3], [[4, 5]]]);
// console.log(result);  // Output: [1, 2, 3, 4, 5]

// function flattenArray<T>(arr: (T | T[])[]): T[] {
//   return arr.flat();
// }

// Problem: Write a function deepEqual that checks if two objects are deeply equal. The function should work for primitive values and arrays.

//     Objective: Handle recursive comparison for nested arrays and objects.

// typescript
// function subtract(initial: number, values: Array<number>): string {
  // let remaining = initial;
  // for (const value of values) {
    // remaining -= value;
  // }
  // return "The result is: " + remaining;
// }

// const numbersInStringFormat = ["10", '20', '30', '40'];

// function convertToNumbers(arr: string[]): number[] {
//   return arr.map(Number);
// }

// type Operation = "add" | "subtract" | "multiply" | "divide";

// function calculate(operation: Operation, a: number, b: number) {
//   switch (operation) {
//     case "add":
//       return a + b;
//     case "subtract":
//       return a - b;
//     case "multiply":
//       return a * b;
//     case "divide":
//       return a / b;
//     default:
//       const _exhaustiveCheck: never = operation;
//       throw new Error(_exhaustiveCheck);
//   }
// }'

// function combine(a: number | string, b: number | string): string | number {
//   if (typeof a === 'string' && typeof b === 'string') {
//     return a + b;
//   } else if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else {
//     return 'Values must be of same type: number or string.'
//   }
// }

// function concatenate(a: string, b: string): string;
// function concatenate(a: number, b: number): number;
// function concatenate(a: string | number, b: string | number): string | number {
//   if (typeof a === 'string' && typeof b === 'string') {
//     return a + b;
//   } else if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else {
//     return 'Values must be of same type: number or string.'
//   }
// }

// const result = concatenate("Hello", "World");
// const numericResult = concatenate(1, 2);

// console.log(result);
// console.log(numericResult);

// interface Dynamic {
//   [key: string]: number;
//   [key: number]: 0 | 1;
//   [index: symbol]: string;
// }

// let sym1: symbol = Symbol("sym1");
// let sym2: symbol = Symbol("sym2");

// const obj: Dynamic = {
//   id: 200,
//   1: 0,
//   [sym1]: "JD",
//   [sym2]: "Bananas"
// }

// interface Person {
//   name: string;
// }

// interface JD {
//   name: "JD";
// }

// type JDPerson = Person & JD;

// const jd: JDPerson = {
//   name: "JD",
// }

// let no: never = 1 as never;
// let str: string = no;

// str.toUpperCase();

// function hello(name: string): void {
//   console.log(name);
// }

// type HelloFunction = typeof hello;

// type Obj = {
//   [sym: symbol]: () => void;
// }

// let newObj: Obj = {
//   [Symbol('fetch')]: function(): void {
//     console.log('I am fetching');
//   }
// }

// type Person = {
//   name: string;
//   value: number;
// }

// function hello({name, value}: Person, title: string): void {
//   console.log(`${title} ${name}. Your value is ${value}`)
// }

// interface UserInfo {
//   name: string;
//   email?: string;
//   age?: number;
// }

// function displayUserInfo(userInfo: UserInfo): string {
//   let email = userInfo.email || 'N/A';
//   let age = userInfo.age || 'unknown';
//   return `${userInfo.name}, ${email}, ${age}.`;
// }

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


// let x1: any = 'hello'; // OK: all types can be assigned to type `any`
// let str1: string = 5 as any; // OK: type `any` can be assigned to all types

// let x2: unknown = 'hello'; // OK: all types can be assigned to type 'unknown'
// let num: number = 5 as unknown // Error: type `unknown` cannot be assigned to any other type

// let x3: never = 'hello'; // Error: no type can be assigned to type `never`.
// let str2: string = 5 as never; // OK type `never` can be assigned to all types

// interface Dog {
//   name: string | number;
// }

// let input = document.querySelector('input');

// function isNumber(arg: any): arg is number {
//   return typeof arg === 'number';
// }

// // example 1
// let x: any = "Launch School";

// if (isNumber(x)) {
//   let y: number = x;
//   console.log(y);
// } else {
//   console.log('X is not a number.');
// }

// function safeGet<T>(arr: T[], index: number): T | undefined {
//   if (index >= 0 && index < arr.length) {
//     return arr[index];
//   }

//   return undefined;
// }

// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// interface Square {
//   kind: "square";
//   sideLength: number;
// }

// function isCircle(shape: unknown): shape is Circle {
//   return (
//     typeof shape === "object" &&
//     shape !== null &&
//     "kind" in shape &&
//     shape.kind === 'circle'
//   );
// }

// function isSquare(shape: unknown): shape is Square {
//   return (
//     typeof shape === "object" &&
//     shape !== null &&
//     "kind" in shape &&
//     shape.kind === 'square'
//   );
// }

// function describeShape(shape: unknown) {
//   let area: number;
  
//   if (isCircle(shape)) {
//     area = Math.PI * shape.radius ** 2;
//   } else if (isSquare(shape)) {
//     area = shape.sideLength ** 2;
//   } else {
//     throw new Error("Shape is invalid");
//   }

//   console.log("The area is " + area);
// }

// type MovieApiResponse = {
//   status: string;
//   data: {
//     title: string;
//     releaseYear: number;
//   };
// };

// function handleMovieApiResponse(response: unknown) {
//   if (!response || typeof response !== "object") {
//     console.log("No data received!");
//     return;
//   }

//   const movieApiResponse = response as MovieApiResponse;

//   console.log(`Status: ${movieApiResponse.status}`.);
//   console.log(`Title: ${movieApiResponse.data.title}.`);
//   console.log(`Release Year: ${movieApiResponse.data.releaseYear}.`);
// }

// function processData(data: unknown): string {
//   if (typeof data === 'string') {
//     return `Hello, ${data}.`;
//   } else if (typeof data === 'number') {
//     return `Age: ${data}.`;
//   } else {
//     throw new Error('Invalid data');
//   }
// }

// // Usage
// console.log(processData("Alice")); // Should print: "Hello, Alice"
// console.log(processData(25)); // Should print: "Age: 25"
// console.log(processData(true)); // Should throw an error: "Invalid data"

// interface myFunc {
//   (): void;
// }

// let fuky: myFunc = function() {
//   console.log('hello');
//   return 'hello';
// }

// interface AnimalType {
//   name: string;
//   makeSound(): string;
// }

// interface DogType extends AnimalType {
//   fetch(): void;
// }

// class Animal implements AnimalType {
//   constructor(public name: string) {}

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
// console.log(myDog.makeSound());
// console.log(myDog.fetch());

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
// }

// interface Review {
//   id: number;
//   productId: number;
//   rating: number;
//   comment: string;
// }

// type ProductWithReviews = Product & {
//   reviews: Array<Review>; 
// }

// type Product = {
//   name: string;
//   price: number;
// };

// interface Shipping {
//   weight: number;
//   shippingCost: number;
// }

// // type ShippableProduct = Product & Shipping;
// interface ShippableProduct extends Product, Shipping {}

// let product: ShippableProduct = {
//   name: "Julie",
//   price: 4.00,
//   weight: 7,
//   shippingCost: 0.25,
// }

// interface MyJsonData {
//   [key: string]:
//     | string
//     | number
//     | boolean
//     | null
//     | MyJsonData
//     | Array<string | number | boolean | null | MyJsonData>;
// }

// let numArr = new Map<number, string>();

// numArr.set(1, 'hello');
// numArr.set(2, 'goodbye');

// console.log(numArr.get(1));

// console.log(Object.keys(numArr).every(key => typeof key === 'number'));

// interface myArr<T> {
//   [index: number]: T;
//   length: number;
// }

// let arr: myArr<number | string> = [1, 2, 3, 'Four'];

// interface myObj {
//   [key: string]: string | number;
//   [index: number]: number;
//   [sym: symbol]: boolean;
// }

// let obj: myObj = {
//   one: 1,
//   2: 2,
//   [Symbol('hello')]: true,
// }

// let sy1 = Symbol('one');
// let sy2 = Symbol('one');

// console.log(sy1);

// type CustomArray = {
//   [index: number]: string | number;
// };

// const customArray: CustomArray = ["apple", 42, "banana"];

// function processCustomArray(arr: CustomArray): string[] {
//   if (Array.isArray(arr)) {
//     return arr.filter(el => typeof el === 'string')
//               .map(el => el.toUpperCase());
//   }
  
//   return [];
// }

// interface FuncSig {
//   (): void;
// }

// let myFunc = (): FuncSig => {
//   console.log('hello');
//   return 'hello';
// };

// // type NewFuncSig = () => void;

// // let newFunc: NewFuncSig = () => 'hello';


// // function 

// function newFunk(): void {
//   return 'hello';
// }

// let newestFunk = (): void => {
//   return 'hello';
// }

// let newNew = function(): void {

// }

// let myFunc: () => boolean = () => {
//   return true;
// }

// type MyObject = {
//   [key: string]: any;
// }

// interface Person extends MyObject {
//   firstName: string;
//   lastName: string;
// }

// let jd: Person = { firstName: "JD", lastName: "Fortune", email: "jdfortune@gmail.com" };

// function logObject(obj: MyObject) {
//   Object.keys(obj).forEach(key => {
//     console.log(`${key}: ${obj[key].toUpperCase}`);
//   });
// }

// logObject(jd);


// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// type Names = "Martial" | "Ted" | "Barney";

// type User = {
//   name: string;
//   age: number;
//   email: string;
// }

// type NameUser = Record<Names, User>;

// let HIMYM: NameUser = {
//   Martial: {
//     name: "Martial",
//     age: 24,
//     email: "marshamllow",
//   },
//   Ted:  {
//     name: "Ted",
//     age: 24,
//     email: "tedgammon",
//   },
//   Barney: {
//     name: "Barney",
//     age: 30,
//     email: "barnacles",
//   }
// }

// type Basic = Record<string, any>;

// let obj: Basic = {
//   hello: 1,
//   two: 'what up',
// }

// type CustomObject = {
//   [key: string]: unknown;
// }

// function doSomething(obj: CustomObject) {
//   for (const key in obj) {
//     const value = obj[key];

//     if (typeof value === "string") {
//       console.log(value.toUpperCase());
//     } else if (typeof value === "number") {
//       console.log(value.toFixed(2));
//     } else {
//       console.log("Unknown value type");
//     }
//   }
// }

// const myObject: CustomObject = {
//   name: "Alice",
//   age: 30,
//   unknownProperty: { key: "value" },
//   anotherUnknown: null,
// };

// doSomething(myObject);

// function getProperty(obj: { [key: string]: unknown}, key: string) {
//   return obj[key];
// }

// function getProperty2<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// function getProperty3(obj: object, key: string) {
//   return (obj as Record<string, any>)[key];
// }

// type Animal = {
//   name: string;
//   species: string;
//   age: number;
//   isEndangered: boolean;
// };

// function getAnimalProp<T extends Animal, K extends keyof T>(animal: T, key: K): T[K] {
//   return animal[key];
// }

// const tiger: Animal = {
//   name: "Felix",
//   species: "Panthera tigris",
//   age: 7,
//   isEndangered: true,
// };

// let value = getAnimalProp(tiger, "species"); // Returns 'Panthera tigris'

// function describeItem<T extends { age: number }>(item: T) {
//   if (item.age < 10) {
//     console.log(
//       `This item is ${item.age} years old. It's still got that fresh style!`
//     );
//   } else if (item.age < 100) {
//     console.log(
//       `This item is ${item.age} years old, giving it that touch of character!`
//     );
//   } else {
//     console.log(
//       `Wow! This item is ${item.age} years old. This is a true antique, with a history that speaks volumes!`
//     );
//   }
// }

// describeItem({name: 'Helena', price: 400, age: 7});

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// interface Animal {
//   name: string;
//   breed: string;
//   age: number;
// }

// interface Tusked {
//   tuskLength: number;
//   tuskNumber: number;
// }

// type Cat = Animal & Tusked & {
//   tailLength: number;
// }

// interface Animal {
//   name: string;
//   // makeNoise: () => void;
// }

// interface DogType extends Animal {
//   tailLength: number;
//   makeNoise: (str?: string) => string;
// }
