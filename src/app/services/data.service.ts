import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mealList: boolean = false;
  loginStatus: boolean = false;


  constructor() { }
}
