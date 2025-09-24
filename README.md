# Summary

## Advantages / Disadvantages
### Advantages
Clear, strict and structural typing.  
Automatic type assign and compile-time type checking.
### Disadvantages
Complexity.

## any, unknown, never - use cases, limitations
### Any
let first: any = 123;  
first = "First"; // can be of any type
### Unknown
const parseData = (data: string): unknown =&gt; JSON.parse(data);  
const jsonString = '{"name": "Vlad"}';  
const parsed = parseData(jsonString); // unknown result of parsing for exmpl
### Never
const thrErr = (message: string): never =&gt; { throw new Error(message) }; // result we never get, because of error or infinite loop

## generics, narrowing Type, default values
### Generics
function getFirst&lt;T&gt;(arr: T[]): T {  
    return arr[0];  
}  
const str = getFirst(["str1","str2"]); // string  
const num = getFirst([1,2,3]) // number, whatever type we pass it will work with it
### narrowing type
function getValue(val: string | number): number{  
    if (typeof val === "string") {  
        return val.length;  
    }  
    else {  
        return val / 100; // will be automatically narrowed to number because its not a string  
    }  
}
### default values
type sometype&lt;T = string&gt; = {  
    name: string;  
    data: T;  
}// we pass default value to type, so it gets what type we want to see if we dont pass anything particular  
function exmpl(message: sometype) {  
    return message.data;  
}  

## utility types
type User = {  
    id: string;  
    name: string;  
    age?: number;  
}  
type PartialUser = Partial&lt;User&gt;; // {id?:...; name?:...; age?:...;}  
type RequiredUser = Required&lt;User&gt;; // {id:...; name:...; age:...;}  
type OmitUser = Omit&lt;User, "id" | "age"&gt;; // {name:...;}  
type PickUser = Pick&lt;User, "id" | "name"&gt;; // {id:...; name:...;}  
type ReadOnlyUser = Readonly&lt;User&gt;; // {readonly id:...; readonly name:...; readonly age?:...;}  
  
type Role =  
    { role: "admin"; id: string; }  
    | { role: "user" }  
    | { role: "guest" };  
type NonAdminRole = Exclude&lt;Role, { role: "admin" }&gt;; // { role: user } | { role: guest }  
type AdminRole = Extract&lt;Role, { role: "admin"}&gt;; // { role: "admin"; id: string; }  
  
type ReturnValue = ReturnType&lt;typeof getValue&gt;; // number  
type Params = Parameters&lt;typeof getValue&gt;; // string | number  
  
type MaybeStr = string | null | undefined;  
type DefinitelyStr = NonNullable&lt;MaybeStr&gt;; // string  
  
type PromiseString = Promise&lt;string&gt;;  
type Result = Awaited&lt;PromiseString&gt;; // string

## type guards
### typeof
type alphnum = string | number;  
function add(a: alphnum, b: alphnum) {  
    if (typeof a === "number" && typeof b === "string") {  
        return a + b; // a - number, b - string  
    }  
    return 0;  
}
### instanceof
class Banana {  
    isTasty(): boolean { return true;}  
}  
class Apple {  
    isJuicy(): boolean { return true;}  
}  
type Fruit = Banana | Apple;  
function buyFruit(fruit: Fruit): number {  
    let price = 0;  
    if (fruit instanceof Banana) {  
        price = fruit.isTasty() ? 5 : 10;  
    }  
    return price;  
}
### in
function buyFruit2(fruit: Fruit): number {  
    let price = 0;  
    if ('isTasty' in fruit) {  
        price = fruit.isTasty() ? 5 : 10;  
    }  
    if ('isJuicy' in fruit) {  
        price = fruit.isJuicy() ? 5 : 10;  
    }  
    return price;  
}
### is
function isString(test: any): test is string {  
  return typeof test === "string";  
}  
function process(input: number | string) {  
  if (isString(input)) { // string  
    console.log(input.toUpperCase());  
  } else {  
    console.log(input.toFixed(2)); // number  
  }  
}  

## type vs interface
### Interface
interface Point {  
      x: number;  
      y: number;  
}  
interface setPoint { (x: number, y: number): void; }
### Type
type PointType = {  
    x: number;  
    y: number;  
};  
type setPointType = (x: number, y: number) =&gt; void;  
type Name = string;  
type Union = string | number;  
type Data = [number, string];  

## enum/const enum/object
 enum Directions {  
    Up, Down, Right, Left  
}  
console.log(Directions.Up, Directions[0]) //0, 'Up'  

const enum Status {  
    Success = 200,  
    Error = 500  
}  
const myStatus = Status.Success; // const myStatus = 200;  

## as const assertion
const colors = ["red", "green", "blue"] as const;  
const user = { name: "Alice", age: 30 } as const;  
const status = "success" as const;  

## access modifiers
class Person {  
    protected id: string; // in same class and subclasses  
    private firstName: string; // in same clas only  
    public lastName: string; // everywhere  
}  
