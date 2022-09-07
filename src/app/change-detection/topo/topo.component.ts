import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { GroupComponent } from './components/group/group.component';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit, AfterViewInit {

  @ViewChildren(GroupComponent) groups!: QueryList<GroupComponent>;
  public isAllTopoExpanded: boolean = false;
  public isDetailsWindowDisplayed: boolean = false;
  public n = 'x';

  public numberOfGroups = Array(3).fill(null).map((_, i) => i);

  constructor(private cdRef: ChangeDetectorRef) { }

  public ngOnInit(): void {
    // setInterval(() => {
    //   // if(this.groups) {
    //   //   this.groups.map(g => 
    //   //     g.name = Math.random().toString().slice(0,4)
    //   //   )
    //   // }
    //   this.changeN();
    //   // this.cdRef.markForCheck();
    // }, 1000);
  }

  public ngAfterViewInit(): void {
    console.log('groups : ', this.groups)
  }

  public toggleAllTopoExpandedState(): void {
    this.isAllTopoExpanded = !this.isAllTopoExpanded;
    this.groups.map((group: GroupComponent) => group.isExpanded = this.isAllTopoExpanded);
  }

  public toggleVisibilityOfDetailsWindow(): void {
    this.isDetailsWindowDisplayed = !this.isDetailsWindowDisplayed;
    console.log('isDetailsWindowDisplayed: ', this.isDetailsWindowDisplayed)
  }

  public handleCloseDetailsWindow(): void {
    this.isDetailsWindowDisplayed = !this.isDetailsWindowDisplayed;
  }

  public handleDisplayDetailsWindow(event: Event) {
    console.log(event)
  }

  public changeN(): void {
    setInterval(
      () => {
        this.n = Math.random().toString().slice(0,4);
        this.cdRef.markForCheck();
      }, 1000);
  }

}
