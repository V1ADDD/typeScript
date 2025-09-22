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

    

  }
}
