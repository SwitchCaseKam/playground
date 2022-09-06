import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {

  public topics: string[][] = [
    ['OnPush', 'on-push'],
    ['Topo', 'topo'],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
