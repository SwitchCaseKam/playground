import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorolly]'
})
export class ColorollyDirective implements OnInit, OnChanges {

  @Input() color: string = '';
  @Input() border: string = '';
  private defaultColor: string = 'yellow';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  public ngOnInit(): void {
    // console.log('color = ', this.color)
    // console.log('border = ', this.border)
    // console.log('this.el.nativeElement.style = ', this.el.nativeElement.style)
    this.el.nativeElement.style.backgroundColor = this.color;

    this.el.nativeElement.style.border = "1px " + this.border;
  }

  public ngOnChanges(changes: SimpleChanges): void {
      console.log('directives: ', changes);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }

  @HostListener('mouseout') onMouseLeave() {
    setTimeout(() => this.highlight(this.defaultColor), 100);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
