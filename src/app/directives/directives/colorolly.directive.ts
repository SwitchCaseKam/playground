import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, HostBinding, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appColorolly]'
})
export class ColorollyDirective implements OnInit {

  @Input() 
  @HostBinding('style.backgroundColor')
  color: string = '';
  @HostBinding('style.border')
  @Input() border: string = '';
  private defaultColor: string = 'pink';

  @Output()
  colorEvent = new EventEmitter<string>();

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  public ngOnInit(): void {
    // this.renderer2.setStyle(this.el.nativeElement, 'background-color', this.color);
    // this.renderer2.setStyle(this.el.nativeElement, 'border', this.border !== '' ? this.border : '3px solid purple' );
    // this.renderer2.setStyle(this.el.nativeElement, 'padding', '10px 2px');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }

  @HostListener('mouseout') onMouseLeave() {
    this.renderer2.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    setTimeout(() => this.highlight(this.defaultColor), 300);
  }

  @HostListener('click') emitColorEvent() {
    this.colorEvent.emit(this.color);
  }

  private highlight(color: string) {
    this.renderer2.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
