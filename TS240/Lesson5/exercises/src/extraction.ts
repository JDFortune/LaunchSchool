// interface ShapeCommon {
//   color: string;
// }

// interface Rectangle extends ShapeCommon {
//   length: number;
//   width: number;
// }

// interface Circle extends ShapeCommon {
//   radius: number;
// }

// type Shape = Rectangle | Circle;

// function displayShapeInfo(shape: Shape): void {
//   if ('length' in shape) {
//     console.log(`Shape is a Rectangle with length of ${shape.length} and width of ${shape.width}.`);
//   } else {
//     console.log(`Shape is a Circle with a radius of ${shape.radius}.`);
//   }
// }

// let rec: Shape = { color: 'red', length: 4, width: 2 };
// let circ: Shape = { color: 'green', radius: 7 };

// displayShapeInfo(rec);

// displayShapeInfo(circ);
////////////////////////////////////////////////////////
// Their Solution //

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

// function displayShapeInfo(shape: Shape): void {
//   console.log(`The shape's color is ${shape.color}.`);
// }

// let rec: Rectangle = { color: 'red', length: 4, width: 2 };
// let circ: Circle = { color: 'green', radius: 7 };


// displayShapeInfo(rec);
// displayShapeInfo(circ);

// type Person = {
//   name: string;
//   age: number;
// }

// type Mammal = {
//   breed: string;
//   age: number;
// }

// let person: Person = { name: "Hannah", age: 28 };
// let cow: Mammal = { breed: 'cow', ...person }

// function calculateRectangleArea(
//   width: number,
//   height: number,
//   options: { unit?: string } = {}
// ): string {
//   const area = width * height;
//   return `${area} ${options.unit ?? "sq. units"}`;
// }

// function calculateRectangleArea(
//   width: number,
//   height: number,
//   { unit = 'sq. units'}: {unit?: string} = {} 
// ): string {
//   const area = width * height;
//   return `${area} ${unit}`;
// }


// console.log(calculateRectangleArea(7, 8, {}));

// function calculateRectangleArea(width: number, height?: number) {
//   const area = width * (height ?? width);
//   return area;
// }

// console.log(calculateRectangleArea(3, 0));

interface NameOptions {
  firstName?: string;
  lastName?: string;
  title?: string;
}

// function formatName(options: NameOptions) {
//   const firstName = options.firstName ?? "John";
//   const lastName = options.lastName ?? "Doe";
//   const title = options.title ?? '';

//   return `${title} ${firstName} ${lastName}`.trim(); 
// }

// function formatName({ firstName = "John", lastName = "Smith", title}: NameOptions) {
//   title = title ? `${title} ` : '';
//   return `${title}${firstName} ${lastName}`; 
// }


// console.log(formatName({firstName: 'JD'}));
// console.log(formatName({firstName: 'JD', title: 'Sir', lastName: 'Pembriltonsonsmith'}));
// console.log(formatName({}));

// let error: Error;
// try {
//   throw new Error("My custom error message");
// } catch (e: unknown) {
//   if (e instanceof Error) {
//     error = e;
//   } else {
//     throw new Error("Unexpected error occurred");
//   }
// }
// console.log(error.message);

// function sqrt(x: number): number {
//   if (x < 0) {
//     throw new Error("Cannot calculate square root of a negative number");
//   }
//   return Math.sqrt(x);
// }

// function safeSqrt(x: number): number {
//   try {
//      return sqrt(x);
//   } catch (e: unknown) {
//     if (e instanceof Error) {
//       return -1;
//     } else {
//       throw e;
//     }
//   }
// }

// const myPromise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(7);
//   }, 1000);
// });

// myPromise.then((result) => {
//   // (parameter) result: number
//   console.log(`The answer is ${result.toFixed(2)}`);
// });

// async function getData(url: string): Promise<void> {
//   try {
//     const result: Response = await fetch(url);
//     const data: unknown = await result.json();
//     console.log(data);
//   } catch (e: unknown) {
//     if (typeof e === 'string') {
//       console.log(e);
//     } else if (e instanceof Error) {
//       console.log(`Error message: ${e.message}`);
//     } else {
//       throw new Error("An unknown error occurred.");
//     }
//   }
// }

// type MyOmit<T, K extends keyof any> = {
//   [P in Exclude<keyof T, K>]: T[P];
// }

// type Dog = {
//   age: number;
//   name: string;
//   hopes: string[];
// }

// type ImmortalDog = MyOmit<Dog, 'age' | 'belong'>;

// let dog: ImmortalDog = {name: 'Valor', hopes: ['cannonball']};

// type All = keyof any;

// interface GreatDog extends Pick<Dog, 'age' | 'name' > {
//   dreams: BigInt[];
// }

// let gd: GreatDog = { age: 27, name: 'Carl', dreams: [1n, 2n, 3n] }


// function createPerson(name: string, age: number) {
//   return { name, age };
// }

// type createPersonParams = Parameters<typeof createPerson>;
// type createPersonReturn = ReturnType<typeof createPerson>;

// function add(a: number, b?: number) {
//   if (b) {
//     return a + b;
//   }
//   return a;
// }

// type addFunction = typeof add;

// type AddParams = Parameters<addFunction>;

// let myParams: AddParams = [1, 29];

// add(...myParams);

// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

// type AddNumbersParams = Parameters<typeof addNumbers>;
// type AddNumbersReturnType = ReturnType<typeof addNumbers>;

// type AddNumbersFunction = (...args: AddNumbersParams) => AddNumbersReturnType;

// const add: AddNumbersFunction = function(a: number, b: number): number {
//   return a + b;
// }

// const nums: AddNumbersParams = [3, 4];
// console.log(add(...nums));

// type User = {
//   name: string;
//   email: string;
//   age?: number;
// }

// let user: User = {
//   name: 'James',
//   email: 'Dean',
//   age: 24,
// }


// const partialUser: Partial<User> = {
//   name: "John",
// }

// partialUser.email = 'golfer';

// if (partialUser.age) {
//   partialUser.age++
// }

// let count: number = 0;

// function increment() {
//   count++;
// }

// while (count < 10) {
//   increment();
// }

// console.log(count);

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 0,
    name: "Sample Product",
    price: 49.99,
    description: 'A sample product for demonstration',
  },
];

// type UpdateableProductFields = {
//   [K in keyof Omit<Product, "id">]?: Product[K];
// }

// type UpdateableProductFields = Partial<Omit<Product, "id">>;

// function updateProduct(
//   productId: number,
//   updatedValues: UpdateableProductFields
// ): void {
//   const product = products.find(product => product.id === productId);

//   if (product) {
//     products[product.id] = { ...product, ...updatedValues };
//     console.log("Product successfully updated");
//   } else {
//     console.log("Product not found");
//   }
// }

// updateProduct(0, {
//   name: "Updated Product Name",
//   price: 99.99,
// });

// console.log(products);

interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "Jane", age: 45 };
const personName: Pick<Person, "name"> = person;
console.log((personName as Person).age); // Type error: Property 'age' does not exist on type 'PersonName'.