import { Injectable } from '@angular/core';
import { LISTSKILLS } from '../shared/listofskills';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills() {
  	return LISTSKILLS;
  }
}
