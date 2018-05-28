import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeezerApiService {

  constructor(protected _http: HttpClient) { }

}
