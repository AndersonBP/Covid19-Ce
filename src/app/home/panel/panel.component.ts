import { Component, OnInit, Input } from "@angular/core";
import { BoletimModel } from "src/app/core/services/api/models/boletim.model";

@Component({
  selector: "home-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  @Input() boletim = new BoletimModel();
  constructor() {}

  ngOnInit() {}
}
