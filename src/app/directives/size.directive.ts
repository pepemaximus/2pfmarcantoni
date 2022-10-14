import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective {

  constructor(private elemento: ElementRef) {
  elemento.nativeElement.style.fontsize = '20px';
  }
}