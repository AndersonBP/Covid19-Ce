import { TotalModel } from "./../core/services/api/models/total.model";
import { BoletimService } from "./../core/services/api/boletim.service";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { BoletimModel } from "../core/services/api/models/boletim.model";
import { BairrosService } from "../core/services/api/bairros.service";
import { DatePipe } from '@angular/common'

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(
    private boletimService: BoletimService,
    private bairrosService: BairrosService,
    public datepipe: DatePipe
  ) { }

  ultimoBoletim = new BoletimModel();
  bairroAfetados = [];
  totalCidades = [];
  totalDiasUF = [];
  toggled = true;
  ultimaAtualizacao = "";

  ngAfterViewInit(): void { }

  ngOnInit(): void {
    this.boletimService.getTotais().subscribe(res => {
      this.ultimoBoletim = res.Data[0];
    });

    this.boletimService.getTotalCidades().subscribe(res => {
      this.totalCidades = res.Data.map(el => el.Resumido);
    });
    this.boletimService.getTotalDiaUF().subscribe(res => {
      this.totalDiasUF = res.Data.map((el) => el.Totais).reverse();
    });
    this.boletimService.getTotais().subscribe(res => {
      this.ultimaAtualizacao = this.datepipe.transform(new Date(res.Data[0].data), 'yy MMM');
    });
  }

  collapseCharts() {
    this.toggled = !this.toggled;
  }


}
