import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Artist } from '../model/last-fm.model';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class MusicApiService {
  /*
    TODO:
    Поправить урлы, сделать минимум повторений.
    Подписаться на топ артистов и преобразовать данные
    (подключить модель)
  */

  chartUrl = 'https://api.deezer.com/chart/tracks';
  lastFmUrl = 'http://ws.audioscrobbler.com/2.0/';
  api_key = '32a63d8e1c209d6f83211a00f8cc838e';

  constructor(protected _http: HttpClient) { }

  getChartTracks() {
    return this._http.get(`${this.lastFmUrl}?method=chart.gettoptracks&api_key=${this.api_key}&format=json`);
  }

  getChartArtists()/*: Observable<Artist[]> */{
    return this._http.get<any>(`${this.lastFmUrl}?method=chart.gettopartists&api_key=${this.api_key}&format=json`);
  }

}
