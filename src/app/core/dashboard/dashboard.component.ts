import { Component, OnInit, AfterContentInit } from '@angular/core';

import { MusicApiService } from '../services/music-api.service';
import { Artist } from '../model/artist.model';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterContentInit{

  artists: Artist[] = [];

  /* Передать в ласт-релиз артистов и отобразить их там */

  constructor(protected _musicApiService: MusicApiService) { }

  ngOnInit() {
    this._musicApiService.getChartArtists()
    .pipe(map(res => {
      return res['artists']['artist'];
    }))
    .subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        const artist = new Artist (
          res.name,
          res.url
          // res.image[2]['#text']
        );
        this.artists.push(artist);
      }
    });
   }


  ngAfterContentInit() { }

}
