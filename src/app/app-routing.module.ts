import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './user-panel/main/main.component';
import { MealsComponent } from './user-panel/main/practice/meal-workout/meals/meals.component';
import { AddMealComponent } from './user-panel/main/practice/meal-workout/meals/add-meal/add-meal.component';
import { WorkoutsComponent } from './user-panel/main/practice/meal-workout/workouts/workouts.component';
import { AddWorkoutComponent } from './user-panel/main/practice/meal-workout/workouts/add-workout/add-workout.component';
import { LoginComponent } from './login/login.component';
import { BasicUiComponent } from './admin-panel/basic-ui/basic-ui.component';
import { HomeComponent } from './user-panel/main/home/home.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


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
    component: AdminPanelComponent,
    children: [
      { path: 'ui', component: BasicUiComponent},
    ]
  },
  { path: '',
    component: UserPanelComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'meals', component: MealsComponent},
      { path: 'meals/add', component: AddMealComponent },
      { path: 'workouts', component: WorkoutsComponent},
      { path: 'workouts/add', component: AddWorkoutComponent },
    ] 
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
