import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataService } from '../data.service';


Chart.register(...registerables)

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  constructor(private dataServices:DataService){  }

  ngOnInit(): void {

    if (this.dataServices.chartdata.length == 0){
      this.dataServices.fetchData().subscribe(() => {
        console.log(this.dataServices.chartdata);
        this.bchart(this.dataServices.colors, this.dataServices.chartdata, this.dataServices.chartlabels);
      });
    }else{
      this.bchart(this.dataServices.colors, this.dataServices.chartdata, this.dataServices.chartlabels);
    }
    
  }

  bchart(colors: any, chartdata: any, chartlabels: any){    
    let canvas = document.getElementById('budgetChart') as HTMLCanvasElement;
    if (canvas) {
        let ctx = canvas.getContext('2d');
        if (ctx) {
            var myDoughnutChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: chartlabels,
                    datasets: [{
                        data: chartdata,
                        borderWidth: 1,
                        backgroundColor: colors
                    }]
                },
                options: {
                    responsive: true,
                  plugins:{
                      legend: {
                        display: true
                    }
                  }
                    
                }
            });
        } else {
            console.error('Failed canvas');
        }
    } else {
        console.error('Failed to get element');
    }
}

}
