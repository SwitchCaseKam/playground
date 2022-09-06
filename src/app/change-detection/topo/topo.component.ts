import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { GroupComponent } from './components/group/group.component';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit, AfterViewInit {

  @ViewChildren(GroupComponent) groups!: QueryList<GroupComponent>;
  public isAllTopoExpanded: boolean = false;

  public numberOfGroups = Array(100).fill(null).map((_, i) => i);

  constructor() { }

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    console.log('groups : ', this.groups)
  }

  public toggleAllTopoExpandedState(): void {
    this.isAllTopoExpanded = !this.isAllTopoExpanded;
    this.groups.map((group: GroupComponent) => group.isExpanded = this.isAllTopoExpanded);
  }

}
