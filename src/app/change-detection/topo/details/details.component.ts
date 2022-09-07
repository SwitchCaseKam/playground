import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Output('closeDetails') public shouldBeVisible = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public closeDetailsWindow(): void {
    this.shouldBeVisible.emit('close')
  }
}
