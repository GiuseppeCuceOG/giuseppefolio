import { Injectable } from '@angular/core';
import { EXPERIENCES } from '../shared/experiences';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperience() {
  	return EXPERIENCES;
  }
}
