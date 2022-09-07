import { Component, Input, OnChanges, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { Type, Unit } from '../../models/unit.model';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit, OnDestroy, OnChanges {

  @Input() public unit: Unit = {name: '', type: Type.INFO, info: '' };
  public shouldDisplayDetailsWindow: boolean = false;

  @Output('displayDetailsEvent') public displayDetailsEvent = new EventEmitter<string>();
  
  constructor() { }

  public ngOnInit(): void {
    console.log(`unit ${this.unit.name} created.`)
  }

  public ngOnDestroy(): void {
    console.log(`unit ${this.unit.name} destroyed.`)
  }

  public ngOnChanges(): void {
    console.log(`ngOnChanges for ${this.unit.name}`);
  }

  public displayDetails(): void {
    console.log(this.unit.name, ' clicked');
    this.shouldDisplayDetailsWindow = true;
    this.displayDetailsEvent.emit(this.unit.info);

  }

}
