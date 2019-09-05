import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDataService {

  constructor() { }
  columnDefs = [
    {
      headerName: 'Workout Name',
      field: 'workoutName',
      sortable: true,
      filter: true,
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 130
    },
    {
      headerName: 'Type',
      field: 'type',
      sortable: true,
      filter: true, 
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 80
    },
    {
      headerName: 'Date', 
      field: 'date', 
      sortable: true, 
      filter: true, 
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 250 
    },
    {
      headerName: 'Reps', 
      field: 'reps', 
      sortable: true, 
      filter: true, 
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 70 
    },
    {
      headerName: 'Sets', 
      field: 'sets', 
      sortable: true, 
      filter: true, 
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 70 
    },
    {
      headerName: 'weight', 
      field: 'weight', 
      sortable: true, 
      filter: true, 
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 80 
    },
    {
      headerName: 'Distance', 
      field: 'distance', 
      sortable: true, 
      filter: true, 
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 90 
    },
    {
      headerName: 'Duration', 
      field: 'duration', 
      sortable: true, 
      filter: true, 
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 100
    },
    {
      headerName: 'Action', 
      field: 'action', 
      sortable: true, 
      filter: true, 
      cellClass: "no-border cell-wrap-text",
      autoHeight: true,
      resizable: true,
      width: 80 
    }
  ];
}
