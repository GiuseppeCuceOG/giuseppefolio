import { Component, OnInit, AfterViewInit, ViewChild, HostListener, Renderer2 } from '@angular/core';
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

  constructor(
  		private skillsService: SkillsService,
  		private render: Renderer2) { }

  ngOnInit() {
  	this.skills = this.skillsService.getSkills();
  }  

  ngAfterViewInit() {
  	let i: number = 0;
  	let j: number = 0;
  	let listskills: any = document.querySelectorAll('.skills-sector-tech-list');
  	let numTech: any = listskills.length;
  	let numLanguages: any = 3;

  	for(i= 0; i < this.skills.length; i++) {
  		if(i === 0) {
  			for(j= 0; j < this.skills[0].technology.length; j++) {
  				listskills[j].style.width = (this.skills[0].technology[j].quality * 15 + '%');
  			}
  		}
  		else if(i === 1) {
    		for(j= 0; j < this.skills[1].technology.length; j++) {
  				listskills[j + (numTech - numLanguages)].style.width = (this.skills[1].technology[j].quality * 15 + '%');
  			}			
  		}
  	}
  }
}
