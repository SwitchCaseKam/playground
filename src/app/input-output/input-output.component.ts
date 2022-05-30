import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  public topics: string[][] = [
    ['input', 'input'],
    ['output', 'output'],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
