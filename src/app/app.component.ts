import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestBootstrapComponent } from './test-bootstrap/test-bootstrap.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestBootstrapComponent, RoomsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hotel-app-ng18';
}
