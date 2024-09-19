import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productos:any[]=[
    {
      "productosId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "precio": 20000,
      "Year":2023,
      "Marca":"NISSAN",
      "Color":"Azul",
      "Imagen":""
    },
    {
      "productosId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "precio": 30000,
      "Year":2022,
      "Marca":"AUDI",
      "Color":"Blanco",
      "Imagen":""
    },
    {
      "productosId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "precio": 150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Azul",
      "Imagen":""
    }
  ]
}
