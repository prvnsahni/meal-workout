import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://api.myjson.com/bins";
  // url = 'https://api.myjson.com/bins/1epmy7';

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get(this.url);
  }

  postData(data) {
    return this.httpClient.post(this.url, data);
  }

}
