import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit, OnChanges {

  public border = '10px solid orange';

  constructor() { }

  ngOnInit(): void {
    const button = document.getElementById('ok-button');
    if (button) {
      fromEvent(button, 'click').subscribe(console.log)
      fromEvent(button, 'click').subscribe(console.log)
    }

    // const obs1 = of(69).pipe(map(e => Math.random()));
    const obs1 = this.createObservableStream();
    obs1.subscribe(console.log);
    obs1.subscribe(console.log);
    obs1.subscribe(console.log);

    setTimeout(() => obs1.subscribe(console.log), 2000)
    
  }

  ngOnChanges(changes: SimpleChanges): void {
      // console.log(changes)
  }

  createObservableStream(): Observable<number> {
    const randomNum = Math.random();
    return new Observable(data => {
     
      data.next(randomNum);
    })
  }

  public handleColorEvent(event: string): void {
    console.log('handleColorEvent : ', event);
  }

}
