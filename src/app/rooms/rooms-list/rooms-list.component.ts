import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() roomList: RoomList[] | null = []; //trans to child từ cha sang,  binding html

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();
  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  constructor() {}
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log('RoomsListComponent destroyed');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log('Changes detected in RoomsListComponent:', changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
}
