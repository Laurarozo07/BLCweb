import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $("#mensajeNav").html('<i class="fas fa-wifi"></i></i>Conectado a <strong>Cali</strong>')
    
  }

}
