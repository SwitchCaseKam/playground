import { Component, OnInit } from '@angular/core';
import { Director, PizzaBuilder } from './builder.models';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  public director = new Director();
  public pizzaMasterVisible: boolean = false;
  public pizzaSelection: boolean = false;
  public selectedPizzaName = '';
  public ingredients: string[] = [];

  constructor() { }

  public ngOnInit(): void {
  }

  public callPizzaMaster(): void {
    const pizzaMaster = new PizzaBuilder();
    pizzaMaster.getPizza().getIngredients()
    this.director.setBuilder(pizzaMaster);
    this.pizzaMasterVisible = true;
    setTimeout(() => {
      this.pizzaSelection = true;
    }, 1500);
  }

  public choosePizzaToMake(): void {
    this.ingredients = [];
    this.pizzaSelection = true;
    this.requestToMakePizza(this.selectedPizzaName);
    this.ingredients = this.director.getBuilder().getPizza().getIngredients();
    console.log(this.ingredients);
  }

  public requestToMakePizza(pizzaName: string): void {
    this.ingredients = [];
    switch(pizzaName) {
      case 'funghi':
        this.director.buildFunghi();
        break;
      case 'margherita':
        this.director.buildMargherita();
        break;
      case 'meat':
        this.director.buildMeatPizza();
        break;
    }
  }

}
