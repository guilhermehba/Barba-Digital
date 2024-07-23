import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardtiposervicoComponent } from './components/cardtiposervico/cardtiposervico.component';
import { CardprofissionalComponent } from './components/cardprofissional/cardprofissional.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageModule } from './homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
