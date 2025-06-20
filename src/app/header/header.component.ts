import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  title: string = '  ';
  constructor() {
    console.log('HeaderComponent constructor called');
  }

  ngOnInit(): void {
    console.log('HeaderComponent initialized via ngOnInit');
  }
}
