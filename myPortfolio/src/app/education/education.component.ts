import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education.service';
import { Education } from '../shared/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education: Education[];

  constructor(private eduService: EducationService) { }

  ngOnInit() {
  	this.education = this.eduService.getEducation();
  }

}
