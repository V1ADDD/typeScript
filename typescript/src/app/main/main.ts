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
    function processData<T = string>(data: T): T {
      return data;
    }
    processData("Hello World"); //string

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
  }
}
