import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
// declare const google: any;



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  barColumns: any;
  barChartdata: any;
  barChartdataOptions: any;

  pieColumns: any;
  pieChartdata: any;
  pieChartdataOptions: any;

  lineColumns: any;
  lineChartdata: any;
  lineChartdataOptions: any;

  combinationColumns: any;
  combinationChartdata: any;
  combinationChartdataOptions: any;

  scatteredPieColumns: any;
  scatteredPieChartdata: any;
  scatteredPieChartdataOptions: any;


  constructor() {
  }

  ngOnInit(): void {
    this.loadBarChartGoogleCharts();
    this.loadPieChartGoogleCharts();
    this.loadLineChartGoogleCharts();

    this.loadCombinationChartGoogleCharts();
    this.loadScatteredPieChartGoogleCharts();
  };

  loadBarChartGoogleCharts(): void {
    this.barColumns = ['Year', 'Projected sales cash flow', 'Actual sales cash flow'];
    this.barChartdata = [
      ['Jan', 900, 390],
      ['Feb', 1000, 400],
      ['Mar', 1170, 440],
      ['Apr', 1250, 480],
      ['May', 1530, 540],
      ['June', 1530, 540],
      ['July', 1530, 540],
      ['Aug', 1530, 540],
      ['Sept', 1530, 540],
      ['Oct', 1530, 540],
      ['Nov', 1530, 540],
      ['Dec', 1530, 540]
    ];
    this.barChartdataOptions = {
      title: 'Cash Flows',
      width: 1800,
      height: 450,
      backgroundColor: '#fafafa',
      animation: {
        startup: true,
        duration: 1000,
        easing: 'out',
      },
    };
  }

  loadPieChartGoogleCharts(): void {

    this.pieColumns = ['Year', 'Sales'];
    this.pieChartdata = [
      ['Booked', 67],
      ['OnHold', 87],
      ['Approved', 120]
    ];
    this.pieChartdataOptions = {
      title: 'Booking status',
      width: 900,
      height: 450,
      is3D: true,
      backgroundColor: '#fafafa',
      animation: {
        startup: true,
        duration: 1000,
        easing: 'in',
      },
    };
  }

  loadLineChartGoogleCharts(): void {
    this.lineColumns = ['Month', 'Projected CashFlow', 'Actual CashFlow'];
    this.lineChartdata = [
      ['Jan', 7.0, -0.2],
      ['Feb', 6.9, 0.8],
      ['Mar', 9.5, 5.7],
      ['Apr', 14.5, 11.3],
      ['May', 18.2, 17.0],
      ['Jun', 21.5, 22.0],
      ['Jul', 25.2, 24.8],
      ['Aug', 26.5, 24.1],
      ['Sep', 23.3, 20.1],
      ['Oct', 18.3, 14.1],
      ['Nov', 13.9, 8.6],
      ['Dec', 9.6, 2.5]
    ];
    this.lineChartdataOptions = {
      title: 'Total cash flows',
      width: 900,
      height: 450,
      hAxis: {
        title: 'Month'
      },
      vAxis: {
        title: 'Value'
      },
      colors: ['#a52714', '#0000ff', '#ff0000', '#00ff00'],
      backgroundColor: '#fafafa',
      animation: {
        startup: true,
        duration: 1000,
        easing: 'in',
      },
    };
  }

  loadCombinationChartGoogleCharts(): void {

    this.combinationColumns = ['Year', 'Projected sales cash flow', 'Actual sales cash flow', 'Average'];
    this.combinationChartdata = [
      ['Jan', 900, 390, 700.5],
      ['Feb', 1000, 400, 900.5],
      ['Mar', 1170, 440, 500.5],
      ['Apr', 1250, 480, 999.5],
      ['May', 1530, 540, 842.5],
      ['June', 1530, 540, 892.5],
      ['July', 1530, 540, 992.5],
      ['Aug', 1530, 540, 952.5],
      ['Sept', 1530, 540, 922.5],
      ['Oct', 1530, 540, 912.5],
      ['Nov', 1530, 540, 982.5],
      ['Dec', 1530, 540, 972.5]
    ];
    this.combinationChartdataOptions = {
      title: 'Cash Flows',
      width: 1800,
      height: 450,
      hAxis: {
        title: 'Years'
      },
      vAxis: {
        title: 'Sales cash flow'
      },
      seriesType: 'bars',
      series: { 2: { type: 'line' } },
      backgroundColor: '#fafafa',
      animation: {
        startup: true,
        duration: 1000,
        easing: 'in',
      },
    };

  }

  loadScatteredPieChartGoogleCharts(): void {
    this.scatteredPieColumns = ['Year', 'Sales'];
    this.scatteredPieChartdata = [
      ['Booked', 67],
      ['OnHold', 87],
      ['Approved', 120]
    ];
    this.scatteredPieChartdataOptions = {
      title: 'Lead Conversion',
      width: 900,
      height: 450,
      is3D: true,
      slices: {
        1: { offset: 0.2 },
        3: { offset: 0.3 }
      },
      backgroundColor: '#fafafa',
      animation: {
        startup: true,
        duration: 1000,
        easing: 'in',
      },
    };
  }


}
