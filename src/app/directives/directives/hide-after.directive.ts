import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hideAfter]'
})
export class HideAfterDirective implements OnInit {

  @Input()
  delay = 0;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  public ngOnInit(): void {
      this.viewContainerRef.createEmbeddedView(this.template);
      setTimeout(() => {
        console.log('HIDE AFTER');
        this.viewContainerRef.clear();
      }, this.delay);
  }
}
