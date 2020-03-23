import { Component, OnInit } from "@angular/core";
import { GoogleChartInterface } from "ng2-google-charts/google-charts-interfaces";

@Component({
  selector: "home-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  constructor() {}
  public ColumnChart: GoogleChartInterface;
  public lineChart: GoogleChartInterface;

  ngOnInit() {
    this.load();
  }

  load() {
    this.ColumnChart = {
      chartType: "ColumnChart",
      dataTable: [
        ["Country", "Infectados", "Óbitos"],
        ["Fortaleza", 116, 0],
        ["Aquiraz", 5, 0],
        ["Sobral", 1, 0],
        ["Fortim", 1, 0],
        ["Juazeiro do Norte", 1, 0]
      ],
      options: {
        backgroundColor: "white",
        title: "Cidades",
        animation: {
          duration: 1000,
          easing: "out",
          startup: true
        }
      }
    };
    this.lineChart = {
      chartType: "LineChart",
      dataTable: [
        ["Dia", "Infectados", "Óbitos"],
        ["16/03", 2, 0],
        ["17/03", 10, 0],
        ["18/03", 19, 0],
        ["19/03", 23, 0],
        ["20/03", 66, 0],
        ["21/03", 82, 0],
        ["22/03", 124, 0]
      ],
      options: {
        backgroundColor: "white",
        title: "Contaminação"
      }
    };
  }
}
