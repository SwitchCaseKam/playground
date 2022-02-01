import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-dynamic-component',
  templateUrl: './child-dynamic-component.component.html',
  styleUrls: ['./child-dynamic-component.component.css']
})
export class ChildDynamicComponentComponent implements OnInit {

  public title: string = 'Default title';

  constructor() { }

  public ngOnInit(): void {
  }

}
