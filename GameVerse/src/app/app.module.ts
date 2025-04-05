import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JeuxComponent } from './jeux/jeux.component';
import { ListJeuxComponent } from './list-jeux/list-jeux.component';
import { JeuxService } from './service/jeux.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReservationComponent } from './reservation/reservation.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { FiltreComponent } from './filtre/filtre.component';
import { FiltreJeuxComponent } from './filtre-jeux/filtre-jeux.component';
import { FiltreReservationComponent } from './filtre-reservation/filtre-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JeuxComponent,
    ListJeuxComponent,
    ReservationComponent,
    ListReservationComponent,
    HeaderComponent,
    NewReservationComponent,
    FiltreComponent,
    FiltreJeuxComponent,
    FiltreReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    JeuxService,
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
