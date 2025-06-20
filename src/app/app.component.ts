import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestBootstrapComponent } from './test-bootstrap/test-bootstrap.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { After } from 'node:v8';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestBootstrapComponent, RoomsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'hotelinventoryapp';
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef; // get place to insert dynamic component
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    const componentRef = this.vcr.createComponent(RoomsComponent);
    //tạo và gắn RoomsComponent vào đó
    componentRef.instance.numberOfRooms = 20;
  }
}
