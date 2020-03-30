import { Component, OnInit } from "@angular/core";
import { GoogleChartInterface } from "ng2-google-charts/google-charts-interfaces";
import { BoletimService } from 'src/app/core/services/api/boletim.service';

@Component({
  selector: "home-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  CidadeChatColumnData: {
    Cidade: string;
    Infectados: number;
    Obitos: number;
  }[] = [];

  TotalDiasUf: any[];

  constructor(private boletimService: BoletimService) {
    window.onresize = e => {
      this.load();
    };
  }
  public ColumnChart: GoogleChartInterface;
  public lineChart: GoogleChartInterface;

  ngOnInit() {
    this.boletimService.getTotalCidades().subscribe(res => {
      this.CidadeChatColumnData = res.Data.map(el => el.Resumido);
    });
    this.boletimService.getTotalDiaUF().subscribe(res => {
      this.TotalDiasUf = res.Data.map((el) => el.Totais).reverse();
    });

    setTimeout(() => {
      this.load();
    }, 1000);
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
        title: "Contaminação",
      }
    };
  }
}
