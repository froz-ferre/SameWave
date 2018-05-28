import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-last-release',
  templateUrl: './last-release.component.html',
  styleUrls: ['./last-release.component.css']
})
export class LastReleaseComponent implements OnInit {

  @Input() artists: Observable<any>;

  constructor() { }
  
  

  ngOnInit() {
    this.artists.subscribe();
    console.log(this.artists);
  }

}
