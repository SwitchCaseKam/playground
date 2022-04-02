import { Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customValueProperty]'
})
export class CustomValuePropertyDirective implements OnInit {

  @Input()
  delay = 0;
  
  @Input()
  color = '';



  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    // console.log('el.ref = ', elementRef.nativeElement);
    // const currentElement = elementRef.nativeElement;
    // console.log('value = ', this.delay);

    // setTimeout(() => {
    //   if (currentElement) {
    //     this.renderer2.setStyle(currentElement, 'background-color', 'green');
    //   }
    // }, this.delay);
  }

  public ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    const currentElement = this.elementRef.nativeElement;
    console.log('el.ref = ', this.elementRef.nativeElement);
    console.log('delay = ', this.delay);
    console.log('color = ', this.color);
    // setTimeout(() => {
    //   if (currentElement) {
    //     // this.renderer2.setStyle(currentElement, 'background-color', 'green');
    //   }
    // }, this.delay);
  }

}
