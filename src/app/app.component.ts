import { Component } from "@angular/core";
import { LoadingService } from "./core/services/loading.service";
import { BoletimService } from "./core/services/api/boletim.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Covid19-Ce";
  ultimaAtualizacao = "";
  constructor(
    private boletimService: BoletimService,
    private _loadingService: LoadingService
  ) {
    _loadingService.init(this);
    this.boletimService.getTotais().subscribe(res => {
      this.ultimaAtualizacao = new Date(res.Data[0].data).toLocaleDateString();
    });
  }

  loading = false;

  show(): void {
    setTimeout(() => {
      this.loading = true;
    }, 100);
  }

  close(): void {
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }
}
