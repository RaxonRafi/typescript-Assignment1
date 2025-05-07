# How does TypeScript help in improving code quality and project maintainability?

TypeScript comes with many features. When we use JavaScript, we don't get any type safety, but in TypeScript, it helps us to define types. This feature helps us to trace errors at runtime; we can get errors while writing the code. In JavaScript, there is no OOP support. But in TypeScript, we can use OOP features; all the OOP concepts like inheritance, encapsulation, polymorphism, and abstraction are supported in TypeScript. By using these OOP features, we can write reusable code and ensure the security of data. In case we can get clean and readable code in TypeScript, which help us to improve code quality. This is how TypeScript helps in improving code quality and project maintainability.

# Provide an example of using union and intersection types in TypeScript.

Union: In union we will get the output as Books or Magazine only one. we can mix the attributes of books and magazine.  
Intersection: In intersection we will get all the properties from books and magazine

```ts
interface Book{
    title: string;
    author: string;
    pages: number;
}
interface Magazine{
    title: string;
    issue: number;
    publisher: string;
}

type bookOrMagazine = Book | Magazine;

const unionType:bookOrMagazine={
    title: "hello world",
    author: "rafi",
    pages: 100
}

type bookAndMagazine = Book & Magazine;

const intersectionType:bookAndMagazine={
    author:"rafi",
    issue:100,
    publisher:'rokomari',
    title: "hello world",
    pages: 100
}
