import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDataService {

  constructor() { }
  columnDefs = [
    {headerName: 'Workout Name', field: 'workoutName', sortable: true, filter: true},
    {headerName: 'Type', field: 'type', sortable: true, filter: true },
    {headerName: 'Date', field: 'date', sortable: true, filter: true},
    {headerName: 'Reps', field: 'reps', sortable: true, filter: true},
    {headerName: 'Sets', field: 'sets', sortable: true, filter: true},
    {headerName: 'weight', field: 'weight', sortable: true, filter: true},
    {headerName: 'Distance', field: 'distance', sortable: true, filter: true},
    {headerName: 'Duration', field: 'duration', sortable: true, filter: true},
    {headerName: 'Action', field: 'action', sortable: true, filter: true}
  ];
}
