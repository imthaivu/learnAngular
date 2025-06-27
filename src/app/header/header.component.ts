import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = '';
  constructor() {
    console.log('HeaderComponent constructor called');
  }

  ngOnInit(): void {
    console.log('HeaderComponent initialized via ngOnInit');
  }
}
