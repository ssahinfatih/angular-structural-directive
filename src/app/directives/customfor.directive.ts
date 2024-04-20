import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomfor]'
})
export class CustomforDirective {

  constructor(
    private templateRef: TemplateRef<any>,//structural directive olması için 
    private viewContainerRef: ViewContainerRef//structural directive olması için 
  ) { }

  @Input() set appCustomfor(value:string []){
      for(let i = 0 ; i < value.length ; i++){
         this.viewContainerRef.createEmbeddedView(this.templateRef,
          { 
            $implicit: value[i],
            index:i

          }
         )
      }
  }
}
