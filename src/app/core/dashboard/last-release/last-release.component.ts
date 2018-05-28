import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Artist } from '../../model/artist.model';

@Component({
  selector: 'app-last-release',
  templateUrl: './last-release.component.html',
  styleUrls: ['./last-release.component.css']
})
export class LastReleaseComponent implements OnInit {

  @Input() artists: Artist[];

  constructor() { }

  ngOnInit() {
    console.log(this.artists);
  }

}
