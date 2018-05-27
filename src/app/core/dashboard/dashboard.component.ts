import { Component, OnInit } from '@angular/core';

import { DeezerApiService } from '../services/deezer-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(protected _deezerApiService: DeezerApiService) { }

  

  ngOnInit() {

  }

}
