import { Routes } from '@angular/router';
import { WorksComponent } from '../works/works.component';
import { SkillsComponent } from '../skills/skills.component';

export const routes: Routes = [
	{path: 'works', component: WorksComponent},
	{path: 'skills', component: SkillsComponent},
	{path: '', redirectTo: '/works', pathMatch: 'full'}
];