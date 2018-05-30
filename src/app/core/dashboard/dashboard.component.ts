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

  artists; // : Artist[] = [];

  /* Передать в ласт-релиз артистов и отобразить их там */

  constructor(protected _musicApiService: MusicApiService) { }

  ngOnInit() {
    this._musicApiService.getChartArtists()
    .pipe(map(res => res['artists']['artist']))
    .subscribe(res => this.artists = res,
    err => console.log(err),
  () => console.log(this.artists));
    // .pipe(map(res => {
    //   res = res['artists']['artist'];
    //   return res;
    // }))
    // .subscribe(res => this.artists = res);
    // .subscribe(res => {
    //   for (let i = 0; i < res.length; i++) {
    //     const artist = new Artist (
    //       res.name,
    //       res.url
    //       // res.image[2]['#text']
    //     );
    //     this.artists.push(artist);
    //   }
    // });
   }


  ngAfterContentInit() {
  }

}
