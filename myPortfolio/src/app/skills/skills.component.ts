import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { listOfSkill } from '../shared/listofskill';
import { Skills } from '../shared/Skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  @ViewChild('test') test;
  skills: listOfSkill[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
  	this.skills = this.skillsService.getSkills();
  	console.log(this.skills[0].technology[0].skill);
  }  

  getQuality() {
  	let i;
  	for(i= 0; i < this.skills[0].technology.length; i++) {
  		return i;
  		console.log(i);
  	}
  }

  ngAfterViewInit() {
  	this.test.nativeElement.style.width = '50px';
  	console.log(this.getQuality());
  }
}
