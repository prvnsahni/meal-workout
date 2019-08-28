import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { BasicUiComponent } from './admin-panel/basic-ui/basic-ui.component';
import { NavbarComponent } from './user-panel/navbar/navbar.component';
import { MealsComponent } from './user-panel/main/meals/meals.component';
import { WorkoutsComponent } from './user-panel/main/workouts/workouts.component';
import { AddMealComponent } from './user-panel/main/meals/add-meal/add-meal.component';
import { AddWorkoutComponent } from './user-panel/main/workouts/add-workout/add-workout.component';
import { LoginComponent } from './user-panel/login/login.component';
import { MainComponent } from './user-panel/main/main.component';
import { CounterComponent } from './user-panel/counter/counter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
    CounterComponent,
    AdminPanelComponent,
    UserPanelComponent,
    BasicUiComponent,
    PageNotFoundComponent
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
