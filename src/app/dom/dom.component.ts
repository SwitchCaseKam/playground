import { Component, OnInit } from '@angular/core';
import { Person } from './binding/binding.component';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css']
})
export class DomComponent implements OnInit {

  public topics: string[][] = [
    ['elementRef', 'element-ref'],
    ['renderer2', 'renderer2'],
    ['custom elements', 'custom-elements'],
    ['dynamic component', 'dynamic-component']
  ];

  public p2 = new Person('thomas', 76);
  public num: number = 0;

  constructor() { }

  public ngOnInit(): void {
    setInterval(() => {
      this.num = Math.floor(Math.random()*1000);
    }, 5000);
  }

}
