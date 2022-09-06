import { Component, Input, OnInit } from '@angular/core';
import { Unit, Type } from '../../models/unit.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() public name: string = '';
  public isExpanded = false;
  public childrenArray: Unit[] = [];

  constructor() { }

  public ngOnInit(): void {
    for (let i=0 ; i< Math.floor(Math.random()*10+5); i++) {
      this.childrenArray.push({
        name: i.toString(),
        type: Object.values(Type)[i%3]
      })
    }
  }

  public toggleExpandedState(): void {
    this.isExpanded = !this.isExpanded;
  }

}
