import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastReleaseComponent } from './dashboard/last-release/last-release.component';
import { ListViewComponent } from './dashboard/list-view/list-view.component';
import { MostPopularComponent } from './dashboard/most-popular/most-popular.component';
import { SearchComponent } from './dashboard/search/search.component';
import { SongCardComponent } from './dashboard/shared/song-card/song-card.component';

import { DeezerApiService } from './services/deezer-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LastReleaseComponent,
    ListViewComponent,
    MostPopularComponent,
    SearchComponent,
    SongCardComponent
  ],
  providers: [
    DeezerApiService
  ],
  exports: [
    LastReleaseComponent,
    ListViewComponent,
    MostPopularComponent,
    SearchComponent,
    SongCardComponent
  ]
})
export class CoreModule { }
