import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrackingArrow]'
})
export class TrackingArrowDirective {

  x: number;
  y: number;

  constructor() { }

  @HostListener('mousemove',  ['$event']) findPos(event: MouseEvent) {	
  	this.x = event.pageX;
  	this.y = event.pageY;
  	console.log(this.x, this.y);
  }

}
