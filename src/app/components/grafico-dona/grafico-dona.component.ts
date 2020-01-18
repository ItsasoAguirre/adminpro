import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() ChartData: MultiDataSet;
  @Input() ChartLabels: Label[];

  public ChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
