import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';


import { MDBBootstrapModule } from './../../angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { ArtistpageComponent } from './artistpage/artistpage.component';

const appRoutes: Routes = [
  { path: 'loginform', component: LoginformComponent },
  { path: 'registrationform', component: RegistrationformComponent },
  { path: 'discover', component: DiscoveryComponent },
  { path: 'artistpage/:id', component:ArtistpageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginformComponent,
    RegistrationformComponent,
    DiscoveryComponent,
    ArtistpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
