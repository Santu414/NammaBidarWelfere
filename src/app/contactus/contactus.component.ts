import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  //zoom level
  zoom: number = 10;

  //start position
  lat: number = 12.9719;
  lng: number = 77.5299;

  //markers
  markers: marker[] = [
    {
      name: 'location one',
      lat: 19.0760,
      lng: 72.8777,
      draggable: true
    },
    {
      name: 'location two',
      lat: 18.0760,
      lng: 62.8777,
      draggable: true
    },
    {
      name: 'location three',
      lat: 20.0760,
      lng: 78.8777,
      draggable: true
    },
    {
      name: 'location four',
      lat: 15.0760,
      lng: 70.8777,
      draggable: true
    }
  ]
  constructor() { }
  ngOnInit() {
  }
}

//marker type
interface marker{
  name?:string;
  lat:number;
  lng:number;
  draggable:boolean;
}
