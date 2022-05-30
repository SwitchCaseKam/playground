import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SampleInterface } from '../../sample-a1.component';

@Component({
  selector: 'app-sample-a3',
  templateUrl: './sample-a3.component.html',
  styleUrls: ['./sample-a3.component.css']
})
export class SampleA3Component implements OnInit {

  @Input() public description: string = '';
  @Input() public elements: number[] = [];
  @Input() public sampleObject: SampleInterface = {name: '', age: 0, tasks: ['']};

  public randomNumber: number = 0;

  @Output() randomNumberEvent = new EventEmitter<number>();

  constructor() { }

  public ngOnInit(): void {
    setInterval(() => {
      this.randomNumber = this.generateRandomNumber();
      this.emitRandomNumber();
    }, 1000);
  }

  public emitRandomNumber(): void {
    this.randomNumberEvent.emit(this.randomNumber);
  }

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 100 + 1);
  }

}
