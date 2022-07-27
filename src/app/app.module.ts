import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandsComponent } from './components/bands/bands.component';
import { MenuComponent } from './components/menu/menu.component';
import { SongsComponent } from './components/songs/songs.component';
import { HttpClientModule } from '@angular/common/http';
import { BandsService } from './components/bands/bands.service';
import { SongsService } from './components/songs/songs.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BandsComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BandsService,
    SongsService
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
