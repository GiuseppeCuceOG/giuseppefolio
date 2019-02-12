import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  @ViewChild('cursor') cursor; 
  @ViewChild('cursorOne') cursorOne;  
  @ViewChild('cursorTwo') cursorTwo;  
  x: number;
  y: number;
  pos;
 
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  	this.cursor.nativeElement.style.position = "absolute";
  	this.cursor.nativeElement.style.display = "none";
  	this.cursorOne.nativeElement.style.position = "absolute";
  	this.cursorOne.nativeElement.style.display = "none";
  	this.cursorTwo.nativeElement.style.position = "absolute";
  	this.cursorTwo.nativeElement.style.display = "none";
  }

  @HostListener('mousemove') trackCursor() {
  	this.pos = window.event;
  	this.x = this.pos.pageX;
  	this.y = this.pos.pageY;
  	this.cursor.nativeElement.style.display = "block";
  	this.cursor.nativeElement.style.top = (this.y - 12) + "px";
  	this.cursor.nativeElement.style.left = (this.x - 46) + "px";
  	this.cursorOne.nativeElement.style.display = "block";
  	this.cursorOne.nativeElement.style.top = (this.y - 19) + "px";
  	this.cursorOne.nativeElement.style.left = (this.x - 53) + "px";
  	this.cursorTwo.nativeElement.style.display = "block";
  	this.cursorTwo.nativeElement.style.top = (this.y - 7) + "px";
  	this.cursorTwo.nativeElement.style.left = (this.x - 40) + "px";
  }
}