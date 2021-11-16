import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const URLHost = "http://localhost:8082"
    let productList; 
    UpdateList()

    
    $("#mensajeNav").html('<i class="fas fa-wifi"></i></i>Conectado a <strong>Cali</strong>')
 // ---------------- funciones -----
     //----------- actulizar tabla de clientes ----------------------------
     function UpdateList() {
      getClients().then((data) => {
        productList = data
      });
    }
     /**
     * trae el listado de usuarios de la base de datos y los muestra en la pagina como una tabla 
     * @returns lista de usuarios 
     */
      function getClients() {
        return new Promise((resolve, reject) => {
  
          fetch(URLHost + "/api/clientes/listar", {
            method: 'GET',
          }).then(result => result.json().then(
            data => {
              JSON.stringify(data)
              resolve(data);
              let salida = '<div class="row row-cols-1 row-cols-md-3 g-4">';
              
  
              for (var iterator in data) {
                console.log(data[iterator].usuario)
                
                salida += '<div class="col">'+
                '<div class="card h-100">'+
                    '<img src="assets/dashboard/marcas/kawasaki.png" class="card-img-top" alt="...">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">'+data[iterator].nombre_clientes+'</h5>'+
                        '<p class="card-text">'+data[iterator].cedula_clientes+'</p>'+
                        '<p class="card-text">'+data[iterator].direccion_clientes+'</p>'+
                        '<p class="card-text">'+data[iterator].telefono_clientes+'</p>'+
                        '<p class="card-text">'+data[iterator].email_clientes+'</p>'+

                    '</div>'+
                '</div>'+
            '</div>'
  
              }
              salida = salida + "<tbody></table>";
              $("#tbProduct").html(salida);
            }
          ));
  
        });
      }
    
    
  }

}
