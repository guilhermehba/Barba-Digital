import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CardtiposervicoComponent } from '../components/cardtiposervico/cardtiposervico.component';
import { CardprofissionalComponent } from '../components/cardprofissional/cardprofissional.component';
import { MaterialModule } from '../components/modules/material/material.module';
import { AgendarComponent } from '../components/agendar/agendar.component';
import { ServicosComponent } from '../components/servicos/servicos.component';
import { ProfissionaisComponent } from '../components/profissionais/profissionais.component';


@NgModule({
  declarations: [
    HomepageComponent,
    CardtiposervicoComponent,
    CardprofissionalComponent,
    AgendarComponent,
    ServicosComponent,
    ProfissionaisComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialModule
  ]
})
export class HomepageModule { }
