import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

class HideAfterContext {
  hideAfter: number = 0
  counter: number = 0;
}

@Directive({
  selector: '[hideAfter]'
})
export class HideAfterDirective implements OnInit, OnChanges {

  @Input('hideAfter')
  set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.hideAfter = this.context.counter = this._delay / 1000;
  };

  private _delay = 0;

  @Input('hideAfterThen')
  placeholder: TemplateRef<any> | null = null;

  private context = new HideAfterContext();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  public ngOnInit(): void {
      this.viewContainerRef.createEmbeddedView(this.template, this.context);
      const timeOutIntervalId = setInterval(() => this.context.counter --, 1000);
      setTimeout(() => {
        console.log('HIDE AFTER');
        this.viewContainerRef.clear();
        if (this.placeholder) {
          this.viewContainerRef.createEmbeddedView(this.placeholder, this.context);
          clearInterval(timeOutIntervalId);
        }
      }, this._delay);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // this.context.hideAfter = this.delay / 1000;
  }
}
