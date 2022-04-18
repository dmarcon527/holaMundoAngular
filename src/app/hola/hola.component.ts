import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.scss']
})
export class HolaComponent implements OnInit {
 persona={
   'nombre': 'Dacil', 
   'apellido':'Marco', 
   'edad': new Date()
 }; 
  constructor() { }

  ngOnInit(): void {
  }

}
