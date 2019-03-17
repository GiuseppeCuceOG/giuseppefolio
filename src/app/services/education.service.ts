import { Injectable } from '@angular/core';
import { EDUCATIONS } from '../shared/educations';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  getEducation() {
  	return EDUCATIONS;
  }
}
