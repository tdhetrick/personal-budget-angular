import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';



Chart.register(...registerables)

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public colors = ["#FF5733", "#FFC133", "#DBFF33", "#4CFF33", "#33FF99", "#33C6FF", "#9933FF"];
  public chartdata =[];
  public chartlabels =[];

  

  constructor(private http: HttpClient){
   

  }
  ngOnInit(): void {

    this.http.get('http://localhost:3000/budget').subscribe((response: any) => {

    console.log(response)

      this.chartlabels = response.theBudget.map((item: { title: any; }) => item.title);
      this.chartdata = response.theBudget.map((item: { budget: any; }) => item.budget);

      this.bchart();

    });
  }

  bchart(){    
    let canvas = document.getElementById('budgetChart') as HTMLCanvasElement;
    if (canvas) {
        let ctx = canvas.getContext('2d');
        if (ctx) {
            var myDoughnutChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: this.chartlabels,
                    datasets: [{
                        data: this.chartdata,
                        borderWidth: 1,
                        backgroundColor: this.colors
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
