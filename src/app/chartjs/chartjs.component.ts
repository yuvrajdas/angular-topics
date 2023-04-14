import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2021', '2022', '2023', '2024'],
    datasets: [
      { data: [ 24, 40, 60, 80, 100], label: 'Above 25',stack: 'a', backgroundColor: ['red'] },
    
      { data: [125,50,75,100,125], stack: 'b', backgroundColor: ['green'] },

      { data: [76, 40, 60, 80, 100 ], label: 'Below 25',stack: 'a', backgroundColor: ['green']},
      
      { data: [25,50,75,100,125], stack: 'b', backgroundColor: ['red'] }
      
    ],
    
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
