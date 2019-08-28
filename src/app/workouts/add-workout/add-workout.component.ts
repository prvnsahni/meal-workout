import { Router } from '@angular/router';
import { WorkoutData } from '../service/workoutData';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { workoutDataList } from '../service/workoutData';


@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {
  flag = true;
  workoutForm;
  data: WorkoutData[] = workoutDataList;
  constructor(private router: Router) { }

  ngOnInit() {
    this.workoutForm = new FormGroup({
      workoutName: new FormControl(null, Validators.required),
      type: new FormControl('Strength'),
      date: new FormControl(new Date),
      reps: new FormControl(0, Validators.required),
      sets: new FormControl(0, Validators.required),
      weight: new FormControl(null, Validators.required),
      distance: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    workoutDataList.push(this.workoutForm.value);
    // console.log(workoutDataList);
    this.router.navigateByUrl('/workouts');
  }
  changeFlag() {
    if (this.flag) {
      this.flag = false;
      this.workoutForm.controls.type.setValue('Endurance');
    // this.workoutForm.removeControl('type');
    // this.workoutForm.addControl('type', new FormControl('Endurance'));
    } else {
      this.flag = true;
      this.workoutForm.controls.type.setValue('Strength');
    }
  }
}
