import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  employeeName: string = 'Vu Thai';
  constructor(private roomService: RoomsService) {}
  // Inject RoomsService with @Self() to use the service provided at this component level
}
