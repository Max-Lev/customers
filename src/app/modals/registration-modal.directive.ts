import { Directive } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRegistrationModal]'
})
export class RegistrationModalDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
    console.log(viewContainerRef)
   };

}
