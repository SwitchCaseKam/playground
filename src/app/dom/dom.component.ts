import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css']
})
export class DomComponent implements OnInit {

  public topics: string[][] = [
    ['elementRef', 'element-ref'],
    ['renderer2', 'renderer2']
  ];

  constructor() { }

  public ngOnInit(): void {
  }

}
