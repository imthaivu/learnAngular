import {
  Component,
  ElementRef,
  Inject,
  Optional,
  ViewChild,
} from '@angular/core';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hotelinventoryapp';
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // fix
    this.name.nativeElement.innerText = 'Hilton Hotel'; // set text for element with #name

    this.loggerService?.log('AppComponent ngOnInit called');
    this.localStorage.setItem('appName', 'Hotel Inventory App'); // set item in local storage
  }

  // get element to insert dynamic component
  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any
  ) {
    // loggerService.log('AppComponent constructor called');
    console.log('AppComponent constructor called');
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef; // get place to insert dynamic component
  // ngAfterViewInit(): void {

  //   // throw new Error('Method not implemented.');
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   //tạo và gắn RoomsComponent vào đó
  //   componentRef.instance.numberOfRooms = 20;
  // }
}
