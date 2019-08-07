import { Component, OnInit } from '@angular/core';
import { Data } from '../services/data';
import { dataList } from '../services/data';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  constructor() { }
  dataList:Data[]=dataList;


  ngOnInit() {
  }
  abc(){
    // debugger;
  }

}
