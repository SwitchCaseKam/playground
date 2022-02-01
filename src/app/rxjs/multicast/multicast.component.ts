import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { multicast, take } from 'rxjs/operators';

@Component({
  selector: 'app-multicast',
  templateUrl: './multicast.component.html',
  styleUrls: ['./multicast.component.css']
})
export class MulticastComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    this.runMulticastExample(); 
  }

  public runMulticastExample(): void {
    // let source = new Observable((subscriber) => {
    //   setInterval(() =>  {
    //     const randomNum = Math.random()*10;
    //     subscriber.next(randomNum)
    //   }, 1000);
    // });

    let source = of(1,2,3,4,5);
    let sourceSubject = new Subject<number>();

    source.subscribe((data: any) => console.log('observer 1: ', data));
    source.subscribe((data: any) => console.log('observer 2: ', data));
    source.subscribe((data) => {
      sourceSubject.next(data);
    });

    // source.connect();

  }

}
