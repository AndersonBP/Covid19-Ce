import { Component, OnInit } from "@angular/core";
import { GoogleChartInterface } from "ng2-google-charts/google-charts-interfaces";
import { BoletimService } from "src/app/core/services/api/boletim.service";

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
  TotalDiasUfDataLine: {
    Dia: any;
    Infectados: any;
    TaxaCrescimento: any;
    Obtios: any;
  }[] = [];

  TotalDiasUf: any[];

  constructor(private boletimService: BoletimService) {
    window.onresize = e => {
      this.load();
    };
  }
  public ColumnChart: GoogleChartInterface;
  public lineChart: GoogleChartInterface;

  public charLineCrescimento: any;
  public chartLineTotal: any;
  public chartBarCidades: any;

  ngOnInit() {
    this.boletimService.getTotalCidades().subscribe(res => {
      this.CidadeChatColumnData = res.Data.map(el => el.Resumido);
      this.boletimService.getTotalDiaUF().subscribe(res => {
        this.TotalDiasUf = res.Data.map(el => el.Totais).reverse();
        this.TotalDiasUfDataLine = this.TotalDiasUf.map((el: any, idx, col) => {
          return {
            Dia: el.Data,
            Infectados: el.Infectados,
            TaxaCrescimento:
              idx == 0 ? 0 : el.Infectados - col[idx - 1].Infectados,
            Obtios: el.Obitos
          };
        });
        this.load();
      });
    });
  }

  load() {
    this.charLineCrescimento = {
      DataSets: [
        {
          data: this.TotalDiasUfDataLine.map(el => el.TaxaCrescimento),
          label: "Taxa de Crescimento"
        }
      ],
      Labels: this.TotalDiasUfDataLine.map(el => el.Dia),
      Options: {
        responsive: true
      },
      Color: [
        {
          borderColor: "black",
          backgroundColor: "rgba(255,255,0,0.28)"
        }
      ]
    };

    this.chartLineTotal = {
      DataSets: [
        {
          data: this.TotalDiasUfDataLine.map(el => el.Infectados),
          label: "Total casos"
        }
      ],
      Labels: this.TotalDiasUfDataLine.map(el => el.Dia),
      Options: {
        responsive: true
      }
    };

    let barDatas = this.CidadeChatColumnData.slice(0, 9).map((el: any) => {
      return {
        Cidade: el.Cidade.trim(),
        Infectatos: el.Infectados,
        Obitos: el.Obitos
      };
    });
    this.chartBarCidades = {
      DataSets: barDatas.map(el => {
        return { data: el.Infectatos, label: "" };
      }),
      Labels: barDatas.map(el => el.Cidade),
      Options: {
        responsive: true
      }
    };
  }
}
