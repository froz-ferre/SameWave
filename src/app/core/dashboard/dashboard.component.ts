import { Component, OnInit } from '@angular/core';

import { MusicApiService } from '../services/music-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  artists;
  
  /* Передать в ласт-релиз артистов и отобразить их там */

  constructor(protected _musicApiService: MusicApiService) { }

  ngOnInit() {
    this.artists = this._musicApiService.getChartArtists();
  }

}
