import { BoletimService } from "./../core/services/api/boletim.service";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { BoletimModel } from "../core/services/api/models/boletim.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(
    private boletimService: BoletimService
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
  }

  collapseCharts() {
    this.toggled = !this.toggled;
  }
}
