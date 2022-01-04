import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-learn',
  templateUrl: './typescript-learn.component.html',
  styleUrls: ['./typescript-learn.component.css']
})
export class TypescriptLearnComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    this.unknownAnyFunction();
    this.falsyValueFunction();
    this.genericFunction();
  }

  private unknownAnyFunction(): void {
    console.log('*** ANY, UNKNOWN ***');
    let a: any = 1;
    a = true;
    a = [0, 1, 2];
    console.log('a = ', a);

    let b: unknown = 1;
    b = true;
    b = [0, 1, 2];
    console.log('b = ', b);

    let c: number = 0;
    c = a;
    // c = b;   return error

    const fun = (num: Number) => {
      console.log('num = ', num);
    }

    fun(a);
    // fun(b);  cannot pass unknown as argument
  }

  private falsyValueFunction(): void {
    console.log('*** FALSY VALUE ***');
    console.log('false === false', false === false);
    console.log('false === false', false === null);
    console.log('false === false', false === undefined);
    // console.log('false === false', false === 0);
    // console.log('false === false', false === NaN);
  }
  
  private genericFunction(): void {
    console.log('*** GENERICS/TEMPLATES ***')
    class Bottle {
      constructor(
        private name: string,
        private size: number
      ) {}
    }

    class Box {
      sizes: number[];

      constructor(s: number[]) {
        this.sizes = s;
      }
    }
  
    class Shelf<T> {
      constructor(
        private id: number,
        private content: T[] = []
      ){}
  

      public putContent(element: T | T[]): void {
        if (Array.isArray(element)) {
          this.content = this.content.concat(element);
          return;
        }
        this.content.push(element)
      }

      public displayContent(): void {
        console.log('shelf ', this.id, ': ', this.content);
      }
    }

    const bottle1 = new Bottle('orange juice', 1);
    const bottle2 = new Bottle('apple juice', 2);
    const bottle3 = new Bottle('water', 0.5);

    const box1 = new Box([1, 1, 1]);
    const box2 = new Box([3, 5, 1]);
    const box3 = new Box([0.6, 0.5, 1.2]);

    const shelf1 = new Shelf(1);
    const shelf2 = new Shelf(2);

    shelf1.putContent([bottle1, bottle2]);
    shelf1.displayContent();
    shelf1.putContent(bottle3);
    shelf1.displayContent();

    shelf2.putContent(box1);
    shelf2.putContent(box2);
    shelf2.putContent(box3);
    shelf2.putContent(bottle1);
    shelf2.displayContent();

    shelf2.putContent([bottle1, bottle2]);
    shelf2.displayContent();
  }

  private utilityTypes(): void {
    interface FullCar {
      name: string,
      type: string,
      mass: number,
      year: number,
      engine: string,
      hp: number,
      color: string
    }

    const basicCar: Partial<FullCar> = {
      name: 'opel',
      year: 2005
    }

    const fullCar: Required<FullCar> = {
      name: 'honda',
      type: 'hatchback',
      mass: 1250,
      year: 2007,
      engine: '1.8 VTEC',
      hp: 140,
      color: 'black'
    }

    const fullCarReadOnly: Readonly<FullCar> = {
      name: 'honda',
      type: 'hatchback',
      mass: 1250,
      year: 2007,
      engine: '1.8 VTEC',
      hp: 140,
      color: 'black'
    }
    // fullCarReadOnly.color = 'purple';   returns error

    console.log('https://www.typescriptlang.org/docs/handbook/utility-types.html');
  }


}
