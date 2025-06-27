import {
  Component,
  OnInit,
  AfterContentInit,
  Host,
  ContentChild,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  constructor(@Host() private roomsService: RoomsService) {}
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log(this.employee);
    this.employee.employeeName = 'Vu Thai - AfterContentInit';
  }
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  ngOnInit(): void {
    // Initialization logic here
  }
}
