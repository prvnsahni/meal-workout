import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './user-panel/main/main.component';
import { MealsComponent } from './user-panel/main/meals/meals.component';
import { AddMealComponent } from './user-panel/main/meals/add-meal/add-meal.component';
import { WorkoutsComponent } from './user-panel/main/workouts/workouts.component';
import { AddWorkoutComponent } from './user-panel/main/workouts/add-workout/add-workout.component';
import { LoginComponent } from './user-panel/login/login.component';
import { BasicUiComponent } from './admin-panel/basic-ui/basic-ui.component';


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
  { path: 'ui', component: BasicUiComponent},
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
