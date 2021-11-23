import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.css']
})
export class ElementRefComponent implements OnInit, AfterViewInit, OnChanges {

  public formsIds = ['sq1', 'rect1', 'circ1'];
  public selectedFormId: number = 0;
  @ViewChild('sq1') sq1: ElementRef = new ElementRef({});
  @ViewChild('rect1') rect1: ElementRef = new ElementRef({});
  @ViewChild('circ1') circ1: ElementRef = new ElementRef({});
  private childsComponents: ElementRef[] = [];

  constructor() { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.childsComponents = [this.sq1, this.rect1, this.circ1];
  }

  public ngOnChanges(): void {
    console.log('on changes')
  }

  public updateDOM(): void {
    const form = this.childsComponents[this.selectedFormId];
    form.nativeElement.setAttribute('style', 'text-align: center');
    form.nativeElement.innerHTML = this.generateNumber();
    form.nativeElement.style.backgroundColor = this.generateColor();
    form.nativeElement.style.border = this.generateBorder();
  }

  private generateNumber(): string {
    return (Math.random()*10+1).toFixed(2);
  }

  private generateColor(): string {
    const color = ['yellow', 'green', 'grey', 'blue', 'brown', 'orange', 'pink', 'purple'];
    const index = Math.round(Math.random()*10)%color.length;
    return color[index];
  }

  private generateBorder(): string {
    const borderSize = Math.round(Math.random()*10) + 'px';
    const color = this.generateColor();
    const borderStyles = ['dotted', 'dashed', 'solid', 'double', 'ridge'];
    const index = Math.round(Math.random()*10)%borderStyles.length;
    return `${borderSize} ${color} ${borderStyles[index]}`; 
  }
}
