import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { ReservasComponent } from './navegacao/reservas/reservas.component';
import { AgendaComponent } from './navegacao/agenda/agenda.component';
import { CalendarioComponent } from './navegacao/calendario/calendario.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    ReservasComponent,
    AgendaComponent,
    CalendarioComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatIconModule,
    HttpClientModule,
    MatNativeDateModule,
    MatCardModule    
  ],
  providers: [],
  bootstrap: [AppComponent,CalendarioComponent]
})
export class AppModule { }
