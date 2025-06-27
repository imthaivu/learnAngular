import {
  Component,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hideRooms = false;
  hotelNameTest = 'Hotel Inventory App';
  hotelName$ = of(this.hotelNameTest); // AsyncPipe

  numberOfRooms = 10;

  // , { static: true }
  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;
  //Nếu { static: true } → Angular sẽ lấy được ViewChild ngay trong ngOnInit(), nếu không thì lấy sau view

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;
  // roomService = new RoomsService();
  constructor(@SkipSelf() private roomService: RoomsService) {
    console.log('RoomsComponent constructor called');
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log('RoomsComponent destroyed');
  }

  ngAfterViewInit(): void {
    // this.headerComponent.title = 'Rooms View';
    console.log(this.headerChildrenComponent);
    // this.headerChildrenComponent.first.title = 'Rooms View - First Child';
    // this.headerChildrenComponent.last.title = 'Rooms View - Last Child';
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

  stream = new Observable((observable) => {
    observable.next('user1');
    observable.next('user2');
    observable.next('user3');
    observable.complete();
    // observable.error('Error occurred');
  });

  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Stream completed'),
      error: (err) => console.error('Error:', err),
    });
    this.stream.subscribe((data) => {
      console.log(data);
    });

    console.log('RoomsComponent initialized via ngOnInit');
    // ví dụ: gọi API ở đây
    this.roomService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    });
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
      roomNumber: (this.roomList.length + 1).toString(), // Tạo số phòng mới dựa trên độ dài mảng
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
