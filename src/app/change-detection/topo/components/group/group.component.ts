import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Unit, Type } from '../../models/unit.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit, OnChanges {

  @Input() public name: string = '';
  public isExpanded = false;
  public childrenArray: Unit[] = [];

  constructor() { }

  public ngOnInit(): void {
    for (let i=0 ; i< Math.floor(Math.random()*10+2); i++) {
      this.childrenArray.push({
        name: i.toString(),
        type: Object.values(Type)[i%3],
        info: `
          Never gonna give you up\n
          Never gonna let you down\n
          Never gonna run around and desert you\n
          Never gonna make you cry\n
          Never gonna say goodbye\n
          Never gonna tell a lie and hurt you`
      });
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges called for group with name: ', this.name )
  }

  public toggleExpandedState(): void {
    this.isExpanded = !this.isExpanded;
  }

}
