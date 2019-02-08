import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  @ViewChild('trackingStar') st;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  	let star = this.st.nativeElement;
  	star.style.position = "absolute";
  	star.style.top = "0px";
  }

}