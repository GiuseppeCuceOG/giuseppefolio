import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core'; 


@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit, AfterViewInit {

  @ViewChild('cursorList') cursorList;
  @ViewChild('cursor') cursor; 
  @ViewChild('cursorOne') cursorOne;  
  @ViewChild('cursorTwo') cursorTwo;
  @ViewChild('cursorThree') cursorThree;  
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
    this.cursorThree.nativeElement.style.position = "absolute";
  	this.cursorThree.nativeElement.style.display = "none";  	
  	this.cursorList.nativeElement.style.position = "absolute";
  	this.cursorList.nativeElement.style.display = "none";	
  }

  @HostListener('mousemove') trackCursor() {
  	this.pos = window.event;
  	this.x = this.pos.pageX;
  	this.y = this.pos.pageY;
  	this.cursor.nativeElement.style.display = "block";
  	this.cursorOne.nativeElement.style.display = "block";
  	this.cursorOne.nativeElement.style.marginLeft = "-5px";
  	this.cursorOne.nativeElement.style.marginTop = "-5px";
  	this.cursorTwo.nativeElement.style.display = "block";
  	this.cursorTwo.nativeElement.style.marginLeft = "2px";
  	this.cursorTwo.nativeElement.style.marginTop = "2.5px";
  	this.cursorThree.nativeElement.style.display = "block";
  	this.cursorThree.nativeElement.style.marginLeft = "-9px";
  	this.cursorThree.nativeElement.style.marginTop = "-9px";
  	this.cursorList.nativeElement.style.display = "block";
  	this.cursorList.nativeElement.style.top = (this.y - 10) + "px";
  	this.cursorList.nativeElement.style.left = (this.x - 10) + "px";
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
  	}, 400)
  }

}
