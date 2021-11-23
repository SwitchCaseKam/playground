import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
  styleUrls: ['./renderer2.component.css']
})
export class Renderer2Component implements OnInit, AfterViewInit {

  public formsIds = ['sq1', 'rect1', 'circ1'];
  public selectedFormId: number = 0;
  @ViewChild('sq1') sq1: ElementRef = new ElementRef({});
  @ViewChild('rect1') rect1: ElementRef = new ElementRef({});
  @ViewChild('circ1') circ1: ElementRef = new ElementRef({});
  private childsComponents: ElementRef[] = [];
  
  constructor(private renderer2: Renderer2) { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.childsComponents = [this.sq1, this.rect1, this.circ1];
  }

  public updateDOM(): void {
    const form = this.childsComponents[this.selectedFormId];
    this.renderer2.setProperty(form.nativeElement, 'innerHTML', this.generateNumber());
    this.renderer2.setStyle(form.nativeElement, 'background-color', this.generateColor());
    this.renderer2.setStyle(form.nativeElement, 'border', this.generateBorder());
  }

  public removeClass(): void {
    const form = this.childsComponents[this.selectedFormId];
    this.renderer2.removeClass(form.nativeElement, 'form');

  }

  public addClass(): void {
    const form = this.childsComponents[this.selectedFormId];
    this.renderer2.addClass(form.nativeElement, 'new-form-class');
  }

  public appendChild(): void {
    const form = this.childsComponents[this.selectedFormId];
    this.renderer2.appendChild(form.nativeElement, 'new-form-class');

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
