// Problem 1

function formatString(input: string, toUpper?: boolean): string{
    if (toUpper || toUpper === null || toUpper === undefined) {
        return input.toUpperCase();
        
    } else {
        return input.toLowerCase();
    }
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

// problem 2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
   return items.filter(item => item.rating >= 4.0).map(item=>{
    return {title: item.title, rating: item.rating}
   })
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
console.log(filterByRating(books));; 


// Problem 3
function concatenateArrays<T>(...arrays: T[][]): T[]{
    let result: T[] = [];
    for(let i = 0; i < arrays.length; i++){
        const array = arrays[i];
       for(let j = 0; j < array.length; j++){
            result.push(array[j]);
        }
    }
    return result;
}
console.log(concatenateArrays(["a", "b"], ["c"],));   
console.log(concatenateArrays([1, 2], [3, 4], [5]));   

// Problem 4
class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}
class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel(): string {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());

// problem 5
function processValue(value: string | number):  number {
    if(typeof value === "string") {
        return value.length;
    } else if(typeof value === "number") {
        return value * 2;
    } else{
        throw new Error("Invalid type");

    }
}
console.log(processValue("hello")); 
console.log(processValue(10)); 

// problem 6
interface Product {
    name: string;
    price: number;
  }
function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0) {
        return null;
    }
    let mostExpensive = products[0];
    for(let i = 1; i < products.length; i++){
        if(products[i].price > mostExpensive.price){
            mostExpensive = products[i];
        }
    }
    return mostExpensive;
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
 console.log( getMostExpensiveProduct(products));

 // Problem 7
 enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
  }
  console.log( getDayType(Day.Monday));
  console.log( getDayType(Day.Sunday));
 
//   problem 8
async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(typeof n ==="number" && n >=0){
                resolve(n * n);

            } else {
                reject("Negative number not allowed");
            }
        },1000);
    })
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error); 