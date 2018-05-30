import { Component, OnInit, AfterContentInit } from '@angular/core';

import { MusicApiService } from '../services/music-api.service';
import { Artist } from '../model/last-fm.model';
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
    .pipe(map(res => res['artists']['artist'])) // Тут массив из 50ти объектов
    .subscribe(
      /* res => this.artists = res, это работает */
      res => {
        res.forEach(element => {
          const temp = new Artist(
              element.name,
              element.url,
              element.image[2]['#text']
            );
            this.artists.push(temp);
        });
      },
      err => console.log(err),
      () => console.log(this.artists));
   }


  ngAfterContentInit() {
  }

}
