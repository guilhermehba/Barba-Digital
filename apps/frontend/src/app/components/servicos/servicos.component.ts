import { Component, OnInit } from '@angular/core';
import { servicos } from '@core/constants';
@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
})
export class ServicosComponent implements OnInit {
  services = servicos;

  constructor() {}
  ngOnInit() {
    console.log(this.services);

  }
}
