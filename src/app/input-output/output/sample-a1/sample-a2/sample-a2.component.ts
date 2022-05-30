import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SampleInterface } from '../sample-a1.component';


@Component({
  selector: 'app-sample-a2',
  templateUrl: './sample-a2.component.html',
  styleUrls: ['./sample-a2.component.css']
})
export class SampleA2Component implements OnInit {

  @Input() public description: string = '';
  @Input() public sampleObject: SampleInterface = {name: '', age: 0, tasks: []};

  public sampleNumberElements = [1, 2, 5, 6, 0, -1, 10];

  @Output() public handlerRandomNumberEvent= new EventEmitter<number>();

  constructor() { }

  public ngOnInit(): void {
  }

  public handleRandomNumberEvent(incomingRandomNumber: number): void {
    console.log("[handleRandomNumberEvent] ", incomingRandomNumber);
    this.handlerRandomNumberEvent.emit(incomingRandomNumber**2);
  }
}
