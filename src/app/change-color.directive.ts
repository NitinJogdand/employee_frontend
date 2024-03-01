import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnChanges {

  @Input() appChangeColor:boolean = false;

  constructor(private element: ElementRef) {
    
   }

   ngOnChanges(): void {
    if(this.appChangeColor){
      this.element.nativeElement.style.color = 'yellow';
    }else{
      this.element.nativeElement.style.color = 'blue';
    }
   }
}
