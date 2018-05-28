import { Component, OnInit, AfterContentInit } from '@angular/core';

import { MusicApiService } from '../services/music-api.service';
import { Artist } from '../model/artist.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterContentInit{

  artists: Artist[];
  art;

  /* Передать в ласт-релиз артистов и отобразить их там */

  constructor(protected _musicApiService: MusicApiService) { }

  ngOnInit() { }


  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this._musicApiService.getChartArtists()
    .subscribe(res => this.art = res);
    setTimeout(() => console.log(this.art), 3000);
    /* На этом этапе получаем 50 ебаных исполнителей */
  }

}
