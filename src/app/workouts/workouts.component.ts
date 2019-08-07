import { Component, OnInit } from '@angular/core';
import { workoutDataList, WorkoutData } from '../services/workoutData';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  workout = true;
  workoutDataList: WorkoutData[] = workoutDataList;


  constructor() { }

  ngOnInit() {
  }

}
