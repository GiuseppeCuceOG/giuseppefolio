import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Info } from '../shared/info';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  info: Info[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  	this.info = this.infoService.getInfo();
  }

}
