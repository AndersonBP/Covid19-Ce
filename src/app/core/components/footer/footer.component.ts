import { Component, OnInit} from "@angular/core";
import { BoletimService } from '../../services/api/boletim.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  ultimaAtualizacao = "";
  constructor(private boletimService: BoletimService, public datepipe: DatePipe) {}

  ngOnInit() {
    this.boletimService.getTotais().subscribe(res => {
      this.ultimaAtualizacao = this.datepipe.transform(new Date(res.Data[0].data), 'dd/MMM');
    });
  }
}
