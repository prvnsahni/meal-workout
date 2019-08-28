import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Data, dataList } from '../service/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  mealAddForm;
  data: Data[] = dataList;

  constructor(private router: Router) { }
  ngOnInit() {
    this.mealAddForm = new FormGroup({
      mealName: new FormControl(null, Validators.required),
      food: new FormArray([new FormControl(null, Validators.required)]),
      date: new FormControl(new Date)
    });
  }
  onSubmit() {
    dataList.push(this.mealAddForm.value);
    this.router.navigateByUrl('/meals');
  }
  onAdd() {
    this.mealAddForm.controls.food.push(new FormControl(null));
  }
  onRemove(index) {
    this.mealAddForm.controls['food'].removeAt(index);
  }
  get controls(){
    return(this.mealAddForm.get('food') as FormArray).controls;
  }
}
