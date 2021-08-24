import { GruposMissionariosComponent } from './componente/grupos-missionarios/grupos-missionarios.component';
import { RodapeComponent } from './componente/rodape/rodape.component';
import { MenuComponent } from './componente/menu/menu.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { NossaHistoriaComponent } from './componente/nossa-historia/nossa-historia.component';
import { NossaHistoriaModule } from './componente/nossa-historia/nossa-historia.module';
import { RodapeModule } from './componente/rodape/rodape.module';
import { MenuModule } from './componente/menu/menu.module';
import { CabecalhoModule } from './componente/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MenuComponent,
    RodapeComponent,
    NossaHistoriaComponent,
    GruposMissionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
