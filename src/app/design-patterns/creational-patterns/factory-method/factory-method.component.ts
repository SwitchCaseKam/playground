import { Component, OnInit } from '@angular/core';
import { FlyTransportOrderCreator, OrderCreator, RoadTransportOrderCreator, SeaTransportOrderCreator } from './factory-method.models';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent implements OnInit {

  public distance = 0;
  public info = '';
  public iconPath = '';

  constructor() { }

  ngOnInit(): void {
  }

  public displayTransportInfo(): void {
    if (this.distance > 1500 && this.distance < 4000) {
      const orderData = this.createOrder(new SeaTransportOrderCreator());
      this.info = orderData[0];
      this.iconPath = orderData[1];
    } else if (this.distance > 4000) {
      const orderData = this.createOrder(new FlyTransportOrderCreator());
      this.info = orderData[0];
      this.iconPath = orderData[1];
    } else {
      const orderData = this.createOrder(new RoadTransportOrderCreator());
      this.info = orderData[0];
      this.iconPath = orderData[1];
    }
  }

  private createOrder(orderCreator: OrderCreator): string[] {
    return orderCreator.logTransportInfo();
  }

}
