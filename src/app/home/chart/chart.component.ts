import { Component, OnInit, Input } from "@angular/core";
import { GoogleChartInterface } from "ng2-google-charts/google-charts-interfaces";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "home-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  @Input() CidadeChatColumnData: {
    Cidade: string;
    Infectados: number;
    Obitos: number;
  }[] = [];

  @Input() TotalDiasUf: any[];

  toggled = true;

  constructor() {
    window.onresize = e => {
      this.load();
    };
  }
  public ColumnChart: GoogleChartInterface;
  public lineChart: GoogleChartInterface;

  ngOnInit() {
    setTimeout(() => {
      this.load();
    }, 3000);
  }

  load() {
    this.ColumnChart = {
      chartType: "ColumnChart",
      dataTable: [["Country", "Infectados", "Óbitos"]].concat(
        this.CidadeChatColumnData.map((el: any) => [
          el.Cidade.trim(),
          el.Infectados,
          el.Obitos
        ])
      ),
      options: {
        legend: { position: "top", alignment: "center" },
        backgroundColor: "white",
        title: "Cidades",
        bar: { groupWidth: "100%" }
      }
    };
    this.lineChart = {
      chartType: "LineChart",
      // dataTable: [
      //   ["Dia", "Infectados", "Óbitos"],
      //   ["16/03", 2, 0],
      //   ["17/03", 10, 0],
      //   ["18/03", 19, 0],
      //   ["19/03", 23, 0],
      //   ["20/03", 66, 0],
      //   ["21/03", 82, 0],
      //   ["22/03", 124, 0]
      // ],
      dataTable: [
        ["Dia", "Infectados", "Taxa de crescimento", "Óbitos"]
      ].concat(
        this.TotalDiasUf.map((el: any, idx, col) => [
          el.Data,
          el.Infectados,
          idx == 0 ? 0 :  el.Infectados-col[idx - 1].Infectados,
          el.Obitos
        ])
      ),
      options: {
        legend: { position: "top", alignment: "center" },
        backgroundColor: "white",
        title: "Contaminação"
      }
    };
  }

  toggleDiv() {
    this.toggled = !this.toggled;
  }
}
