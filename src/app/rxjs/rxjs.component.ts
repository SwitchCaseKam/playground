import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  public topics: Map<string, string> = new Map([
    ['switchMap vs mergeMap vs concatMap vs exhaustMap', 'switchMap-mergeMap-concatMap-exhaustMap']
  ]);

  constructor() { }

  public ngOnInit(): void {
    console.log('RXJS component on init')
  }

}
