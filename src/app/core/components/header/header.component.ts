import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <nav class="navbar">
      <!-- logo -->
      <div class="navbar-brand">
        <h3 class="float-left">Monitoramento Covid19 Ceará</h3>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
