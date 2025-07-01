import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];
  getRooms$ = this.http.get<RoomList[]>(`http://localhost:3000/api/rooms`).pipe(
    shareReplay(1) // shareReplay(1) để cache dữ liệu, tránh gọi lại API nhiều lần
  );
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(environment.apiEndpoint);

    console.log('RoomsService initialized');
  }
  getRooms() {
    return this.http.get<RoomList[]>(`http://localhost:3000/api/rooms`);
  }
  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>(`http://localhost:3000/api/rooms`, room);
  }
  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(
      `http://localhost:3000/api/rooms/${room.roomNumber}`,
      room
    );
  }
  //Bạn dùng Observable<RoomList[]> vì backend trả về toàn bộ danh sách phòng mới

  // Điều này giúp frontend cập nhật UI dễ hơn, mượt hơn
  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(
      `http://localhost:3000/api/rooms/${id}`
    );
  }
  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
