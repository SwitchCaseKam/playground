import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customValueProperty]'
})
export class CustomValuePropertyDirective implements OnInit {

  @Input()
  delay = 0;

  @Input()
  @HostBinding('innerHTML')
  customText = 'default';
  
  @Input()
  @HostBinding('style.backgroundColor')
  primaryColor = '';

  @Input()
  secondaryColor = '';

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
  ) { }

  public ngOnInit(): void {
    const currentElement = this.elementRef.nativeElement;
    setTimeout(() => {
      this.renderer2.setStyle(currentElement, 'background-color', this.secondaryColor);
      this.renderer2.setStyle(currentElement, 'color', 'white');
    }, this.delay)

  }

}
