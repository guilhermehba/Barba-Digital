import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CardtiposervicoComponent } from '../components/cardtiposervico/cardtiposervico.component';
import { CardprofissionalComponent } from '../components/cardprofissional/cardprofissional.component';


@NgModule({
  declarations: [
    HomepageComponent,
    CardtiposervicoComponent,
    CardprofissionalComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
