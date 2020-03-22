import { Component } from "@angular/core";
import { LoadingService } from "./core/services/loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Covid19-Ce";

  constructor(private _loadingService: LoadingService) {
    _loadingService.init(this);
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
