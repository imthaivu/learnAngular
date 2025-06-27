import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContainerComponent } from './container/container.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HeaderComponent,
    EmployeeComponent,
    ContainerComponent,
    RoomsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule], // Add HttpClientModule to imports
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
