import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fromEvent, Observable, of, Subscriber, Subscription } from 'rxjs';
import { concatMap, exhaustMap, mergeMap, switchMap, tap } from 'rxjs/operators';

interface Rectangle {
  value: number;
  color: string;
}

@Component({
  selector: 'app-switch-map-merge-map-concat-map-exhaust-map',
  templateUrl: './switch-map-merge-map-concat-map-exhaust-map.component.html',
  styleUrls: ['./switch-map-merge-map-concat-map-exhaust-map.component.css']
})
export class SwitchMapMergeMapConcatMapExhaustMapComponent implements OnInit {

  public operatorFunctionsChoice: FormGroup = new FormGroup({});
  public operatorFunctions: string[] = ['mergeMap', 'switchMap', 'concatMap', 'exhaustMap'];

  public rectangles: Map<number, Rectangle[]> = new Map();
  public maxColumns = Array.from({length: 12}, (v, i)=> i);
  public counter = 0;
  public colors: string[] = ['red', 'yellow', 'green', 'blue', 'orange'];

  private streamSubscription = new Subscription();
  private buttonStream = of();  
  private stream = (index: number = 0) => new Observable((observer: Subscriber<[number, Rectangle]>) => {
    let i = 0;
    setInterval(() => {
      const color = this.colors[(index-1)%this.colors.length];
      observer.next([index-1, {value: i, color}])
      i += 1;
      if (i === 12) { observer.complete(); }
    }, 300)
  });
  
  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.operatorFunctionsChoice = this.createOperatorFunctionsFromGroup();

    const button = document.getElementById('streamOnButton');
    if (button) {
      this.buttonStream = fromEvent<PointerEvent>(button, 'click')
    }

    this.operatorFunctionsChoice.get('mode')?.valueChanges.pipe(
      ).subscribe(
        data => {
          this.clearRectangleData();
          console.log(data)
          switch(data) {
            case 'switchMap':
              this.switchMap()
              break;
            case 'mergeMap':
              this.mergeMap();
              break;
            case 'concatMap':
              this.concatMap();
              break;
            case 'exhaustMap':
              this.exhaustMap();
              break;
          }
        }
      )
  }

  private mergeMap(): void {
    this.streamSubscription = this.buttonStream.pipe(
      tap(x => this.counter += 1),
      mergeMap(x => this.stream(this.counter))
    ).subscribe(
      (streamData: [number, Rectangle]) => {
        this.handleDataStream(streamData);
      },
    );
  }

  private switchMap(): void {
    this.streamSubscription = this.buttonStream.pipe(
      tap(x => this.counter += 1),
      switchMap(x => this.stream(this.counter))
    ).subscribe(
      (streamData: [number, Rectangle]) => {
        this.handleDataStream(streamData);
      },
    );
  }

  private concatMap(): void {
    this.streamSubscription = this.buttonStream.pipe(
      tap(x => this.counter += 1),
      concatMap(x => this.stream(this.counter))
    ).subscribe(
      (streamData: [number, Rectangle]) => {
        this.handleDataStream(streamData);
      },
    );
  }
  
  private exhaustMap(): void {
    this.streamSubscription = this.buttonStream.pipe(
      tap(x => this.counter += 1),
      exhaustMap(x => this.stream(this.counter))
    ).subscribe(
      (streamData: [number, Rectangle]) => {
        this.handleDataStream(streamData);
      },
    );
  }


  private handleDataStream(data: [number, Rectangle]): void {
    const indexNumKey = data[0];
    const value = data[1];
    if (this.rectangles.has(indexNumKey)) {
      const state = this.rectangles.get(indexNumKey);
      if (state) {
        state.push(value);
        this.rectangles.set(indexNumKey, state);
      }
    } else {
      this.rectangles.set(indexNumKey, [value]);
    }
  }

  private createOperatorFunctionsFromGroup(): FormGroup {
    return this.formBuilder.group({
      mode: [],
    });
  }

  private clearRectangleData(): void {
    this.counter = 0;
    this.rectangles.clear();
    this.streamSubscription.unsubscribe();
  }
}


