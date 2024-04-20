import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomif]'
})
export class CustomifDirective {

  constructor(
    private templateRef: TemplateRef<any>,//structural directive olması için 
    private viewContainerRef: ViewContainerRef//structural directive olması için 
  ) { }
  @Input() set appCustomif(value: boolean) {
    if (value) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    }
  }
}
