import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{

  @ViewChild('cursorList') cursorList;
  @ViewChild('cursor') cursor; 
  @ViewChild('cursorOne') cursorOne;  
  @ViewChild('cursorTwo') cursorTwo;
  @ViewChild('cursorThree') cursorThree;  
  x: number;
  y: number;
  pos;
 
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
  	this.cursorOne.nativeElement.style.position = "absolute";
  	this.cursorTwo.nativeElement.style.position = "absolute";
    this.cursorThree.nativeElement.style.position = "absolute";
  	this.cursorList.nativeElement.style.position = "absolute";
  	this.cursorList.nativeElement.style.display = "none"; 
  }

  @HostListener('mousemove') trackCursor() {
  	this.pos = window.event;
  	this.x = this.pos.clientX;
  	this.y = this.pos.clientY;
  	this.cursorOne.nativeElement.style.marginLeft = "-5px";
  	this.cursorOne.nativeElement.style.marginTop = "-25.5px";
  	this.cursorTwo.nativeElement.style.marginLeft = "1.5px";
  	this.cursorTwo.nativeElement.style.marginTop = "-18px";
  	this.cursorThree.nativeElement.style.marginLeft = "-9px";
  	this.cursorThree.nativeElement.style.marginTop = "-29.5px";
  	this.cursorList.nativeElement.style.display = "block";
  	this.cursorList.nativeElement.style.top = (this.y - 8) + "px";
  	this.cursorList.nativeElement.style.left = (this.x - 8) + "px";
  }

  @HostListener('click') speedUp() {
  	this.cursor.nativeElement.classList.add('speedUp');
  	this.cursorOne.nativeElement.classList.add('speedUpReverse');
  	this.cursorTwo.nativeElement.classList.add('expand');
  	this.cursorThree.nativeElement.classList.add('speedUp');
  	setTimeout(() => {
		this.cursor.nativeElement.classList.remove('speedUp');
	  	this.cursorOne.nativeElement.classList.remove('speedUpReverse');
	  	this.cursorTwo.nativeElement.classList.remove('expand');
	  	this.cursorThree.nativeElement.classList.remove('speedUp');
  	}, 500)
  }

}