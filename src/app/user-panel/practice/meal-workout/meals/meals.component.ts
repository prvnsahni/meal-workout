import { Component, OnInit, ViewChild } from '@angular/core';
import { Data } from './service/data';
import { dataList } from './service/data';
import { MealDataService } from './service/meal-data.service';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  // @ViewChild('agGrid') agGrid: AgGridAngular;
  constructor(public mealDataService: MealDataService ) { }
  dataList: Data[] = dataList;


  ngOnInit() {
    console.log(this.dataList);
  }
  abc(){
    // debugger;
  }
  // getSelectedRows() {
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   const selectedData = selectedNodes.map( node => node.data );
  //   const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }

}
