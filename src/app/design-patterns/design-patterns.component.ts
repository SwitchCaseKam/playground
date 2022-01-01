import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-patterns',
  templateUrl: './design-patterns.component.html',
  styleUrls: ['./design-patterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  public topics: string[][] = [
    ['Creational: Factory Method', 'creational-patterns/factory-method'],
    ['Creational: Abstract Factory', 'creational-patterns/abstract-factory'],
    ['Creational: Builder', 'creational-patterns/builder'],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
