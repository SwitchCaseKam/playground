import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getStyle() {
    return {
      'background-color': 'orange',
      'font-size': '3em',
      'font-weight': '100',
      'text-align': 'center',
      'margin-bottom': '0.25em'
    }
  }

}
