import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { listOfSkill } from '../shared/listofskill';
import { Skills } from '../shared/Skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: listOfSkill[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
  	this.skills = this.skillsService.getSkills();
  }

}
