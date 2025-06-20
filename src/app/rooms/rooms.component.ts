import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import { of } from 'rxjs'; // Cho async pipe
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms/rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { After } from 'v8';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hideRooms = false;
  hotelNameTest = 'Hotel Inventory App';
  hotelName$ = of(this.hotelNameTest); // AsyncPipe

  numberOfRooms = 10;

  // , { static: true }
  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;
  //Nếu { static: true } → Angular sẽ lấy được ViewChild ngay trong ngOnInit(), nếu không thì lấy sau view
  constructor() {
    console.log('RoomsComponent constructor called');
  }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.headerComponent.title = 'Rooms View';
  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    console.log(this.headerComponent);
    // throw new Error('Method not implemented.');
    console.log('RoomsComponent ngDoCheck called');
  }
  title = 'Room  List';
  roomList: RoomList[] = [];

  ngOnInit(): void {
    console.log('RoomsComponent initialized via ngOnInit');
    // ví dụ: gọi API ở đây
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Single',
        amenities: 'AC, TV, WiFi',
        price: 100,
        discount: 0.15, // PercentPipe
        photos:
          'https://images.pexels.com/photos/26754253/pexels-photo-26754253.jpeg',
        checkinTime: new Date('2023-10-01T14:00:00'),
        checkoutTime: new Date('2023-10-02T12:00:00'),
        rating: 4.5, // Đánh giá của khách hàng
      },
      {
        roomNumber: 2,
        roomType: 'Double',
        amenities: 'AC, TV, WiFi, Mini Bar',
        price: 150,
        discount: 0.25,
        photos:
          'https://images.pexels.com/photos/26754253/pexels-photo-26754253.jpeg',
        checkinTime: new Date('2023-10-01T14:00:00'),
        checkoutTime: new Date('2023-10-02T12:00:00'),
        rating: 4.0, // Đánh giá của khách hàng
      },
      {
        roomNumber: 3,
        roomType: 'Suite',
        amenities: 'AC, TV, WiFi, Mini Bar, Balcony',
        price: 250,
        discount: 0.35,
        photos:
          'https://images.pexels.com/photos/26754253/pexels-photo-26754253.jpeg',
        checkinTime: new Date('2023-10-01T14:00:00'),
        checkoutTime: new Date('2023-10-02T12:00:00'),
        rating: 5.0, // Đánh giá của khách hàng
      },
    ];
  }
  selectedRoom!: RoomList; // toi cam doan la no không có bị null á

  rooms = {
    totalRooms: 20,
    available: 10,
    booked: 5,
  };
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Room List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: this.roomList.length + 1,
      roomType: 'New Room',
      amenities: 'AC, TV, WiFi',
      price: 100,
      discount: 0,
      photos: '',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 0,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]; // Cập nhật lại mảng để kích hoạt change detection
  }
}
