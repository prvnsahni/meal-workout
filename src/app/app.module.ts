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
import { MealsComponent } from './user-panel/practice/meal-workout/meals/meals.component';
import { WorkoutsComponent } from './user-panel/practice/meal-workout/workouts/workouts.component';
import { AddMealComponent } from './user-panel/practice/meal-workout/meals/add-meal/add-meal.component';
import { AddWorkoutComponent } from './user-panel/practice/meal-workout/workouts/add-workout/add-workout.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './user-panel/main/main.component';
import { CounterComponent } from './shared/components/counter/counter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './user-panel/home/home.component';
import { BannerComponent } from './user-panel/home/banner/banner.component';
import { PorfolioComponent } from './user-panel/porfolio/porfolio.component';
import { PracticeComponent } from './user-panel/practice/practice.component';
import { MealWorkoutComponent } from './user-panel/practice/meal-workout/meal-workout.component';

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
    PageNotFoundComponent,
    HomeComponent,
    BannerComponent,
    PorfolioComponent,
    PracticeComponent,
    MealWorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    NgSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
