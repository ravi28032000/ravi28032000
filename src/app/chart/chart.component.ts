import { Component, OnInit,ViewChild  } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

  //   new Chart(this.ctx, {
  //     type: 'line',
  //     data: {
  //         datasets: [{
  //             label: 'Current Vallue',
  //             data: [0, 20, 40, 50],
  //             backgroundColor: "rgb(115 185 243 / 65%)",
  //             borderColor: "#007ee7",
  //             fill: true,
  //         },
  //         {
  //           label: 'Invested Amount',
  //           data: [0, 20, 40, 60, 80],
  //           backgroundColor: "#47a0e8",
  //           borderColor: "#007ee7",
  //           fill: true,
  //       }],
  //         labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
  //     },
  // });
  /**************************************** */
//   new Chart(this.ctx, {
//     type: 'bar',
//     data: {
//       datasets: [{
//         label: 'My First Dataset',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(255, 205, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(201, 203, 207, 0.2)'
//         ],
//         borderColor: [
//           'rgb(255, 99, 132)',
//           'rgb(255, 159, 64)',
//           'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   },
//   {
//     label:"second dataset",
//     data:[60,50,81,50,55,40],
//     borderWidth:2,

//   }



// ],

//        labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
//     },
  
// });
/*********************************RADAR CHART********************************** */
// new Chart(this.ctx,{
//   type:"radar",
//   data:{
//     datasets: [{
//       label:"first dataset",
//       data:[60,50,81,50,55,40],
//       borderWidth:2,
//     },
//   {
//     label:"first dataset",
//       data:[65,55,86,55,56,45],
//       borderWidth:1,
//   }],
//     labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
// },
// });
/**************************************************Doughnut chart */
  
// new Chart(this.ctx,{
//   type:"doughnut",
//   data:{
//     datasets: [{
//       label:"first dataset",
//       data:[60,50,81,50,55,40],
//       borderWidth:2,
//       backgroundColor:[
//         'rgb(201, 203, 207)'
//       ]
//     },
//   {
//     label:"first dataset",
//       data:[65,55,86,55,56,45],
//       borderWidth:1,
//   }],
//     labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
// },
// });
/******************************************PieCharts********************** */
// new Chart(this.ctx,{
//   type:"pie",
//   data:{
//     datasets: [{
//       label:"first dataset",
//       data:[60,50,81,50,55,40],
//       borderWidth:2,
//       backgroundColor:[
//         'rgb(201, 203, 207)'
//       ]
//     },
//   {
//     label:"first dataset",
//       data:[65,55,86,55,56,45],
//       borderWidth:1,
//   }],
//     labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
// },
// });
/**************************polar chart********************** */

new Chart(this.ctx,{
  type:"scatter",///////scatter,area,mixed,polar
  data:{
    datasets: [{
      label:"first dataset",
      data:[60,50,81,50,55,40],
      borderWidth:2,
      backgroundColor:[
        'rgb(201, 203, 207)'
      ]
    },
  {
    label:"first dataset",
      data:[65,55,86,55,56,45],
      borderWidth:1,
  }],
    labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
},
});












}
}

