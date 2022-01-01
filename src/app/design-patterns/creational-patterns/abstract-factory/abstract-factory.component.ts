import { Component, OnInit } from '@angular/core';
import { Car, CarFactory, CompactCarFactory, SportsCarFactory } from './abstract-factory.models';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent implements OnInit {

  public cars: Car[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public createSportsCar(): void {
    this.createCar(new SportsCarFactory());
  }

  public createCompactCar(): void {
    this.createCar(new CompactCarFactory());
  }

  private createCar(factory: CarFactory): void {
    console.log('Creating car...');
    const engine = factory.createEngine();
    const body = factory.createBody();
    const wheels = factory.createWheels();
    const car = new Car(engine, body, wheels);
    this.cars.push(car);
  }
}
