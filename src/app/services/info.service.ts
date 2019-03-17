import { Injectable } from '@angular/core';
import { INFOS } from '../shared/infos';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ 
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getInfo() {
  	return INFOS;
  }
}
