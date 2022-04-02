import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pipe-child',
  templateUrl: './pipe-child.component.html',
  styleUrls: ['./pipe-child.component.css']
})
export class PipeChildComponent implements OnInit, OnChanges {

  @Input()
  public word: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
      console.log('input changed: ', changes);
  }

}
