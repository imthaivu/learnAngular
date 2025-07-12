import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomAddComponent } from './rooms/room-add/room-add.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms/add', component: RoomAddComponent }, // <- Đặt trước
  { path: 'rooms/:roomid', component: RoomsBookingComponent }, // <- Đặt sau
  { path: 'rooms', component: RoomsComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
