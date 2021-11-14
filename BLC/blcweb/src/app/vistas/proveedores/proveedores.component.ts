import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#mensajeNav").html('<i class="fas fa-wifi"></i></i>Conectado a <strong>Cali</strong>')
  }

}
