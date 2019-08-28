import { Component, OnInit } from '@angular/core';
import { workoutDataList, WorkoutData } from './service/workoutData';
import { WorkoutDataService } from './service/workout-data.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  workout = true;
  workoutDataList: WorkoutData[] = workoutDataList;


  constructor(public workoutDataService : WorkoutDataService) { }

  ngOnInit() {
    console.log(this.workoutDataList);
    
  }

}
