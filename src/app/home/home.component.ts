import { BoletimService } from "./../core/services/api/boletim.service";
import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private boletimService: BoletimService) {}

  ngOnInit(): void {
    this.boletimService.getTotais();
  }
}
