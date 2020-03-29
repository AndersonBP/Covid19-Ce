import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <mat-toolbar color="primary" class="app-bar mat-elevation-z6">
      Monitoramento Covid19 Ceará
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.css']
})

// <nav class="navbar">
//       <!-- logo -->
//       <div class="navbar-brand">
//         <h3 class="float-left">Monitoramento Covid19 Ceará</h3>
//       </div>
//     </nav>
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
