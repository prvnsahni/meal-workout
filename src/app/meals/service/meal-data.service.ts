import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealDataService {
  columnDefs = [
    {headerName: 'Meal Name', field: 'mealName', sortable: true, filter: true },
    {headerName: 'Food',      field: 'food',     sortable: true, filter: true },
    {headerName: 'Create At', field: 'date',     sortable: true, filter: true}
  ];
  rowData: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      // this.rowData = this.http.get('https://api.myjson.com/bins/eotdn');
  }

}
