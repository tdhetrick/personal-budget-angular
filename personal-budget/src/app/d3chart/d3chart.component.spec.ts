import { Component, ElementRef, OnInit, NgZone, OnDestroy } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'pb-d3chart',
  templateUrl: './d3chart.component.html',
  styleUrls: ['./d3chart.component.scss']
})


export class D3ChartComponent implements OnInit, OnDestroy {

  private svg: any;
  private margin = 50;
  private width = 750;
  private height = 600;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private data = [
    { label: 'A', value: 10 },
    { label: 'B', value: 20 },
    { label: 'C', value: 30 }
  ];

  constructor(private el: ElementRef, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.createSvg();
      this.drawChart(this.data);
    });
  }

  private createSvg(): void {
    this.svg = d3.select(this.el.nativeElement)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
  }

  private drawChart(data: any[]): void {
    const pie = d3.pie<any>().value((d: any) => Number(d.value));
    this.svg
      .selectAll('pieces')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: number) => ['red', 'green', 'blue'][i])
      .attr('stroke', '#fff')
      .style('stroke-width', '1px');
  }

  ngOnDestroy(): void {
    if (this.svg) {
      this.svg.remove();
    }
  }
}
