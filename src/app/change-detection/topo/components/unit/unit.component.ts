import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  @Input() public name: string = '';
  @Input() public type: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
