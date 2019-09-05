import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealDataService {
  columnDefs = [
    {
      headerName: 'Meal Name',
      field: 'mealName',
      sortable: true,
      filter: true, 
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 200
    },
    {
      headerName: 'Food',
      field: 'food',
      sortable: true,
      filter: true,
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 200
    },
    {
      headerName: 'Create At',
      field: 'date',
      sortable: true,
      filter: true,
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 350
    }
  ];
  rowData: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() { autoHeight: true
      // this.rowData = this.http.get('https://api.myjson.com/bins/eotdn');
  }

}
