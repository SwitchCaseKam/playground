import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

export interface SampleInterface {
  name: string,
  age: number
  tasks: string[]
}

@Component({
  selector: 'app-sample-a1',
  templateUrl: './sample-a1.component.html',
  styleUrls: ['./sample-a1.component.css']
})
export class SampleA1Component implements OnInit {

  public sampleObject: SampleInterface = {
    name: 'tom', 
    age: 27,
    tasks: ['task 1', 'task 2', 'task 3'] 
  };

  public num : number | undefined = undefined;

  constructor() { }

  public ngOnInit(): void {
  }

  public handleIncomingRandomNumber(randomNum: number): void {
    this.num = randomNum;
  }

}
