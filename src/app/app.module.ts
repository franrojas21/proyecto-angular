import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { SobreNosotrosComponent } from './paginas/home/sobre-nosotros/sobre-nosotros.component';
import { PortafolioComponent } from './paginas/home/portafolio/portafolio.component';
import { CotizacionComponent } from './paginas/home/cotizacion/cotizacion.component';
import { ServiciosComponent } from './paginas/home/servicios/servicios.component';
import { ContactoComponent } from './paginas/home/contacto/contacto.component';
import { FooterComponent } from './paginas/home/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreNosotrosComponent,
    PortafolioComponent,
    CotizacionComponent,
    ServiciosComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
