import { GruposMissionariosComponent } from './componente/grupos-missionarios/grupos-missionarios.component';
import { MenuComponent } from './componente/menu/menu.component';
import { NossaHistoriaComponent } from './componente/nossa-historia/nossa-historia.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:"nossa-historia", component:NossaHistoriaComponent
},
{
  path:"home" ,component:MenuComponent
},
{
  path:"grupos-missionarios" ,component:GruposMissionariosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
