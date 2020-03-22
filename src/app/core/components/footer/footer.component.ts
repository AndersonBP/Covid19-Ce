import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Tele-saúde 24h: 0800 275 1475
          </p>
          <p>
            Fonte: <a href="https://coronavirus.ceara.gov.br/boletins">https://coronavirus.ceara.gov.br/boletins/</a>
          </p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
