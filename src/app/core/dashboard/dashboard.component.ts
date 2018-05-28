import { Component, OnInit } from '@angular/core';

import { MusicApiService } from '../services/music-api.service';
import { Artist } from '../model/artist.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  artists: Artist[];
  
  /* Передать в ласт-релиз артистов и отобразить их там */

  constructor(protected _musicApiService: MusicApiService) { }

  ngOnInit() {
    this.artists = this._musicApiService.getChartArtists();
  }

}
