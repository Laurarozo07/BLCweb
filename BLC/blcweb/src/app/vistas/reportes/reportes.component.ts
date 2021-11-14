import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
    $("#mensajeNav").html('<i class="fas fa-wifi"></i></i>Conectado a <strong>Bogotá</strong>')
    
  }

}
