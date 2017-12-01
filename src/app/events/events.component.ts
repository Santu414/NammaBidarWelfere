import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  fullImagePath: string;
  constructor() {
    this.fullImagePath ='./assets/img/bidar_1.jpg';
  }

  ngOnInit() {
  }

}
