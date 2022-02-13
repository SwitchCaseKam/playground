import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
  styleUrls: ['./renderer2.component.css']
})
export class Renderer2Component implements OnInit, AfterViewInit {

  public formsIds = ['sq1', 'rect1', 'circ1'];
  public selectedFormId: number = 0;
  @ViewChild('sq1' ) sq1: ElementRef = new ElementRef({});
  @ViewChild('rect1') rect1: ElementRef = new ElementRef({});
  @ViewChild('circ1') circ1: ElementRef = new ElementRef({});
  @ViewChild('addClass') addClassButton: ElementRef = new ElementRef({});
  @ViewChild('removeClass') removeClassButton: ElementRef = new ElementRef({});
  @ViewChild('updateStyle') updateStyleButton: ElementRef = new ElementRef({});
  @ViewChild('createElement') createElementButton: ElementRef = new ElementRef({});
  @ViewChild('removeElement') removeElementButton: ElementRef = new ElementRef({});
  private childsComponents: ElementRef[] = [];
  
  @HostListener('window:scroll')
  onClick() {
    const randomColor = Math.floor(Math.random()* (1677721 - 1 + 1) + 1).toString();
    const randomColorHex = parseInt(randomColor, 16);
    console.log(randomColorHex)
    const mainContainer = document.getElementById('main-container');
    this.renderer2.setStyle(mainContainer, 'background-color', `#${randomColorHex}`);
    this.renderer2.setStyle(mainContainer, 'border', `1px solid black`);
  }

  constructor(private renderer2: Renderer2) { }

  public ngOnInit(): void {
    setInterval(() => {
      const randomColor = Math.floor(Math.random()* (16777214 - 1 + 1) + 1).toString();
      const randomColorHex = parseInt(randomColor, 16);
      console.log(randomColorHex)
      const mainContainer = document.getElementById('main-container');
      this.renderer2.setStyle(mainContainer, 'background-color', `#${randomColorHex}`);
    }, 1000);
  }

  public ngAfterViewInit(): void {
    this.childsComponents = [this.sq1, this.rect1, this.circ1];
    this.renderer2.listen(this.addClassButton.nativeElement, 'click', () => this.addClass());
    this.renderer2.listen(this.removeClassButton.nativeElement, 'click', () => this.removeClass());
    this.renderer2.listen(this.updateStyleButton.nativeElement, 'click', () => this.updateDOM());
    this.renderer2.listen(this.createElementButton.nativeElement, 'click', () => this.createNewElement());
    this.renderer2.listen(this.removeElementButton.nativeElement, 'click', () => this.removeElement());
    this.renderer2.listen(document.getElementById('testAddElementButton'), 'click', () => this.handleTestElement());
  }

  private updateDOM(): void {
    const form = this.childsComponents[this.selectedFormId];
    this.renderer2.setProperty(form.nativeElement, 'innerHTML', this.generateNumber());
    this.renderer2.setStyle(form.nativeElement, 'background-color', this.generateColor());
    this.renderer2.setStyle(form.nativeElement, 'border', this.generateBorder());
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

  private removeClass(): void {
    const form = this.childsComponents[this.selectedFormId];
    this.renderer2.removeClass(form.nativeElement, 'form');
  }

  private addClass(): void {
    const form = this.childsComponents[this.selectedFormId];
    this.renderer2.addClass(form.nativeElement, 'new-form-class');
  }

  private createNewElement(): void {
    const newElement = this.renderer2.createElement('div');
    this.renderer2.setProperty(newElement, 'innerHTML', 'new div element created by renderer2');
    this.renderer2.setStyle(newElement, 'border', '2px solid blue');
    this.renderer2.setStyle(newElement, 'background-color', 'white');
    this.renderer2.addClass(newElement, 'new-element-class');
    const form = this.childsComponents[this.selectedFormId];
    this.renderer2.appendChild(form.nativeElement, newElement);
  }

  private removeElement(): void {
    const form = this.childsComponents[this.selectedFormId];
    this.renderer2.removeChild(form.nativeElement,document.querySelector('.new-element-class'));
  }

  private handleTestElement(): void {
    const testElement = document.getElementById('test-element');
    const newElement = this.renderer2.createElement('div');
    this.renderer2.setProperty(newElement, 'width', 500);
    this.renderer2.setProperty(newElement, 'height', 281);
    this.renderer2.setStyle(newElement, 'background-color', 'blue');
    this.renderer2.setProperty(newElement, 'innerHTML', 'xyz');
    this.renderer2.setStyle(testElement, 'background-color', 'grey');
    this.renderer2.setStyle(testElement, 'border', '2px brown dotted');
    this.renderer2.setStyle(testElement, 'margin', '5px');
    this.renderer2.appendChild(testElement, newElement);
  }
}
