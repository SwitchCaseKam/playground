import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input() num : number = 0;
  @Input() p1: Person = new Person('john', 45);
  
  constructor() { }

  public ngOnInit(): void {
    console.log('on ngOnInit');
    const randomNames = ['kamil', 'ewelina', 'sylwia', 'wojti', 'przemo', 'kasia', 'krzysztof', 'borys', 'bano']
    setInterval(() => {
      const randomName = randomNames[Math.floor(Math.random()*(randomNames.length-1))];
      this.p1 = new Person(randomName, Math.floor(Math.random()*100));
      this.num = randomNames.indexOf(randomName);
    }, 5000);
  }

  public ngOnChanges(changes: SimpleChanges): void {
      console.log('on ngOnChanges');
  }

  public ngDoCheck(): void {
    console.log('on ngDoCheck');
      
  }

  public ngAfterViewInit(): void {
    console.log('on ngAfterViewInit');
      
  }

  public ngAfterViewChecked(): void {
    console.log('on ngAfterViewChecked');
      
  }

  public ngAfterContentInit(): void {
    console.log('on ngAfterContentInit');
      
  }

  public ngAfterContentChecked(): void {
    console.log('on ngAfterContentChecked');
      
  }

}
