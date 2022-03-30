import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './navegacao/home/home.component';

const routes: Routes = [
  //login
  {path: '',component: LoginComponent},
  {path: 'home',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
