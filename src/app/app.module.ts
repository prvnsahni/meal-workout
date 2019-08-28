import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MealsComponent } from './meals/meals.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { AddMealComponent } from './meals/add-meal/add-meal.component';
import { AddWorkoutComponent } from './workouts/add-workout/add-workout.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CounterComponent } from './counter/counter.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MealsComponent,
    WorkoutsComponent,
    AddMealComponent,
    AddWorkoutComponent,
    LoginComponent,
    MainComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
