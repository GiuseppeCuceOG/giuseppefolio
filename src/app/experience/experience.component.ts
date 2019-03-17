import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Experience } from '../shared/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: Experience[];

  constructor(private expService: ExperienceService) { }

  ngOnInit() {
  	this.experience = this.expService.getExperience();
  }

}
