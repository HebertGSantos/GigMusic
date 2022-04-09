import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AgendaComponent } from './navegacao/agenda/agenda.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ReservasComponent } from './navegacao/reservas/reservas.component';

const routes: Routes = [
  //login
  {path: '',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'reservas',component: ReservasComponent},
  {path: 'agenda',component: AgendaComponent},
  {path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
