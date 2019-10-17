import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos = [
    new Evento('Taller de ciencias', new Date(10-10-10))
  ];

  constructor() { }

  ngOnInit() {
  }

}
