import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MealsComponent } from './meals/meals.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { AddWorkoutComponent } from './workouts/add-workout/add-workout.component';
import { AddMealComponent } from './meals/add-meal/add-meal.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  // { path: '',
  //   component: MainComponent,
  //   children: [
  //     { path: 'meals',component: MealsComponent },
  //     { path: 'workouts', component: WorkoutsComponent },
  //   ] 
  // },
  // { path: 'login', component: LoginComponent },
  // { path: 'meals/add', component: AddMealComponent },
  // { path: 'workouts/add', component: AddWorkoutComponent },
  { path: '',
    component: MainComponent,
    children: [
      { path: 'meals', component: MealsComponent},
      { path: 'meals/add', component: AddMealComponent },
      { path: 'workouts', component: WorkoutsComponent},
      { path: 'workouts/add', component: AddWorkoutComponent }
    ] 
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
