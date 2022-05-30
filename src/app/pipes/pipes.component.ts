import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit, OnChanges {

  public words = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'It has survived not only five centuries, but also the leap into electronic typesetting',
    'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets',
    'containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus',
    'PageMaker including versions of Lorem Ipsum.'
  ];
  // public word: Observable<string> = ;
  public word = '';
  public sign = ' ';
  constructor() { }

  public ngOnInit(): void {
    // const obs = this.getWordStream();
    // this.word = this.getWordStream();
    this.getWordStream().subscribe(d =>
      this.word = d
    );

  }

  private getWordStream(): Observable<string> {
    return interval(1000).pipe(
      takeWhile(e => e !== 25),
      map(e => { return this.words[e % this.words.length]; })
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
      console.log('ng on changes called : ', changes);
  }




}
