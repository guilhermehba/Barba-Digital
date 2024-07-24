import { Component, OnInit } from '@angular/core';
import { profissionais } from '@core/constants';


@Component({
  selector: 'app-cardprofissional',
  templateUrl: './cardprofissional.component.html',
  styleUrls: ['./cardprofissional.component.css']
})
export class CardprofissionalComponent implements OnInit {
  profissionals = profissionais

  constructor() { }
  ngOnInit() {
    console.log(this.profissionals);
  }

}
