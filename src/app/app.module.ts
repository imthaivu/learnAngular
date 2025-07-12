import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { FormsModule } from '@angular/forms';
import { RoomAddComponent } from './rooms/room-add/room-add.component';

function initFactory(initService: InitService) {
  return () => initService.init(); // Initialize the service
}
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HeaderComponent,
    EmployeeComponent,
    ContainerComponent,
    RoomsListComponent,
    AppNavComponent,
    NotfoundComponent,
    RoomsBookingComponent,
    RoomAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
  ], // Add HttpClientModule to imports
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS, // Provide HttpClient for making HTTP requests
      // useValue: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor, // Use the RequestInterceptor class
      multi: true, // Allow multiple interceptors
    },
    {
      provide: 'APP_INITIALIZER', // Use APP_INITIALIZER to run the init function
      useFactory: initFactory, // Factory function to initialize the service
      deps: [InitService], // Dependencies for the factory function
      multi: true, // Allow multiple initializers
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
