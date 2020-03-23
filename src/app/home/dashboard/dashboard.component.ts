import { Component, OnInit, Input } from "@angular/core";
import { BoletimModel } from "src/app/core/services/api/models/boletim.model";

@Component({
  selector: 'home-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() boletim = new BoletimModel();
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
