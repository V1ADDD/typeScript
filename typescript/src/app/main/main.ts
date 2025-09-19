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
  }
}
