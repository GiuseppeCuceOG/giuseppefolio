import { Routes } from '@angular/router';
import { WorksComponent } from '../works/works.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';

export const routes: Routes = [
	{path: 'works', component: WorksComponent},
	{path: 'skills', component: SkillsComponent},
	{path: 'experience', component: ExperienceComponent},
	{path: 'education', component: EducationComponent},
	{path: '', redirectTo: '/works', pathMatch: 'full'}
];