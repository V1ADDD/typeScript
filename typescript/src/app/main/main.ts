import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  first() {
    const parentElement = document.getElementById("main");

    // Any
    let first: any = 123;
    first = "First";

    //Unknown
    const parseData = (data: string): unknown => JSON.parse(data);
    const jsonString = '{"name": "Vlad"}';
    const parsed = parseData(jsonString);

    //Never
    const thrErr = (message: string): never => { throw new Error(message) };


    // Generics
    function getFirst<T>(arr: T[]): T {
      return arr[0];
    }
    const str = getFirst(["str1","str2"]); // string
    const num = getFirst([1,2,3]) // number

    // Type narrowing
    function getValue(val: string | number): number{
      if (typeof val === "string") {
        return val.length;
      }
      else {
        return val / 100; // narrowed to number
      }
    }
    const len = getValue(str);
    const perc = getValue(num);

    // Default types
    type sometype<T = string> = {
      name: string;
      data: T;
    }
    function exmpl(message: sometype) {
      return message.data;
    }

    //Utility types
    type User = {
      id: string;
      name: string;
      age?: number;
    }
    type PartialUser = Partial<User>; 
    type RequiredUser = Required<User>;
    type OmitUser = Omit<User, "id" | "age">;
    type PickUser = Pick<User, "id" | "name">;
    type ReadOnlyUser = Readonly<User>;

    type Role = 
      { role: "admin"; id: string; } 
    | { role: "user" }
    | { role: "guest" };
    type NonAdminRole = Exclude<Role, { role: "admin" }>; 
    type AdminRole = Extract<Role, { role: "admin"}>;

    type ReturnValue = ReturnType<typeof getValue>;
    type Params = Parameters<typeof getValue>;

    type MaybeStr = string | null | undefined;
    type DefinitelyStr = NonNullable<MaybeStr>;

    type PromiseString = Promise<string>;
    type Result = Awaited<PromiseString>;

    const func = async () => {
      return {
        id: 123,
      }
    }
    type Res = Awaited<ReturnType<typeof func>>;

    //Type guards
    type alphnum = string | number;
    function add(a: alphnum, b: alphnum) {
      if (typeof a === "number" && typeof b === "string") {
        return a + b; // a - number, b - string
      }
      return 0;
    }

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

    //Interface vs Type
    interface Point {
      x: number;
      y: number;
    }
    interface setPoint { (x: number, y: number): void; }

    type PointType = {
      x: number;
      y: number;
    };
    type setPointType = (x: number, y: number) => void;
    type Name = string;
    type Union = string | number;
    type Data = [number, string];

    //Enum
    enum Directions {
      Up, Down, Right, Left
    }
    console.log(Directions.Up, Directions[0]) //0, 'Up'
    
    const enum Status {
      Success = 200,
      Error = 500
    }
    const myStatus = Status.Success; // const myStatus = 200;

    //as const
    const colors = ["red", "green", "blue"] as const;
    const user = { name: "Alice", age: 30 } as const;
    const status = "success" as const;
    
    //access modifiers
    class Person {
      protected id: string; // in same class and subclasses
      private firstName: string; // in same clas only
      public lastName: string; // everywhere

      constructor(id: string, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
      }

      getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }
    }
  }
}
