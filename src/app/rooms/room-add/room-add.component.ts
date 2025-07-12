import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss'],
})
export class RoomAddComponent implements OnInit {
  AddRoom() {
    // throw new Error('Method not implemented.');
    this.roomService
      .addRoom(this.room)
      .subscribe((data) => (this.successMessage = 'Room added'));
  }
  successMessage: string = '';
  room: RoomList = {
    roomNumber: 'string',
    roomType: 'string',
    amenities: 'string',
    price: 0,
    // Thêm giảm giá % (0.15 = 15%)
    discount: 0,

    // Optional: đường dẫn ảnh
    photos: 'string',

    // Ngày giờ nhận và trả phòng
    checkinTime: new Date(),
    checkoutTime: new Date(),

    // Các thông tin thêm có thể thêm vào sau
    // notes?: string;
    rating: 0,
  };
  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {}
}
