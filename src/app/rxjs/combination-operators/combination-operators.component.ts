import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { concat, interval, merge, Observable, of, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Rectangle } from '../common/models';

@Component({
  selector: 'app-combination-operators',
  templateUrl: './combination-operators.component.html',
  styleUrls: ['./combination-operators.component.css']
})
export class CombinationOperatorsComponent implements OnInit, OnDestroy {

  public streamSelectionFormGroup = new FormGroup({});
  public combinationOperatorsFormGroup = new FormGroup({});

  public rectangles: Rectangle[] = [];

  public streamsMap: Map<string, Observable<Rectangle>> = new Map([
    ['RED: (1,2,...,9)', interval(1000).pipe(take(9), map(i => { return {value: i+1, color: 'red'}}))],
    ['GREEN: (10,20,...,90)', interval(1000).pipe(take(9), map(i => { return {value: (i+1)*10, color: 'green'}}))],
    ['BLUE: (100,200,...,900)', interval(1000).pipe(take(9), map(i => { return {value: (i+1)*100, color: 'blue'}}))],
  ]);

  private chosenActiveStreams: Observable<Rectangle>[] = [];
  private chosenOperator: string = '';

  public combinationOperatorsMap: Map<string, Observable<Rectangle>> = new Map([
    ['concat', concat(...this.chosenActiveStreams)],
    ['merge', merge(...this.chosenActiveStreams)]
  ]);

  private checkboxSubscription: Subscription | undefined = new Subscription();
  private radioButtonsSubscription: Subscription | undefined  = new Subscription();
  private streamsSubscription: Subscription | undefined  = new Subscription();

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.streamSelectionFormGroup = this.createStreamSelectionFormGroup();
    this.combinationOperatorsFormGroup = this.createCombinationOperatorsFormGroup();
    this.subscribeToCheckboxChanges();
    this.subscribeToCombinationOperatorsChanges();
  }

  public ngOnDestroy(): void {
    this.checkboxSubscription?.unsubscribe();
    this.radioButtonsSubscription?.unsubscribe();
    this.streamsSubscription?.unsubscribe();
  }

  public getStreamMapKeys(): string[] {
    return Array.from(this.streamsMap.keys());
  }

  public getCombinationOperatorsMapKeys(): string[] {
    return Array.from(this.combinationOperatorsMap.keys());
  }

  public startStreams(): void {
    this.clearState();
    this.updateCombinationOperatorsMap();
    this.streamsSubscription = this.combinationOperatorsMap.get(this.chosenOperator)?.subscribe(
      (rectangle: Rectangle) => this.rectangles.push(rectangle)
    );
  }

  public disabledStartStreamButton(): boolean {
    return this.chosenActiveStreams.length === 0 || this.chosenOperator === '' ? true : false;
  }

  private createStreamSelectionFormGroup(): FormGroup {
    return this.formBuilder.group({
      streams: this.formBuilder.array(Array.from(this.streamsMap.keys()).map(el => false))
    })
  }

  private createCombinationOperatorsFormGroup(): FormGroup {
    return this.formBuilder.group({
      operators: []
    })
  }

  private subscribeToCheckboxChanges(): void {
    this.radioButtonsSubscription = this.streamSelectionFormGroup.get('streams')?.valueChanges.subscribe(
      (streamsValue: boolean[]) => {
        this.clearState();
        this.chosenActiveStreams = [... this.streamsMap.values()].filter((el, i) => streamsValue[i] === true);
      }
    )
  }

  private subscribeToCombinationOperatorsChanges(): void {
    this.checkboxSubscription = this.combinationOperatorsFormGroup.get('operators')?.valueChanges.subscribe(
      (chosenOperator: string) => {
        this.clearState();
        this.chosenOperator = chosenOperator;
      }
    )
  }

  private updateCombinationOperatorsMap(): void {
    this.combinationOperatorsMap = new Map([
      ['concat', concat(...this.chosenActiveStreams)],
      ['merge', merge(...this.chosenActiveStreams)]
    ]);
  }

  private clearState(): void {
    this.rectangles = [];
    // this.chosenActiveStreams = [];
    // this.chosenOperator = '';
  }

}
