import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms/:roomid', component: RoomsBookingComponent },
  { path: 'rooms', component: RoomsComponent }, // Route with a parameter for room ID
  { path: '', redirectTo: '/rooms', pathMatch: 'full' }, // Redirect to rooms by default
  { path: '**', component: NotfoundComponent }, // Wildcard route to handle any undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
