import { Component, OnInit } from '@angular/core';
import { profissionais } from '@core/constants';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {
profissionais=profissionais

constructor(config: NgbRatingConfig) {
  config.max = 5;
	config.readonly = true;
}
ngOnInit() {}

}
