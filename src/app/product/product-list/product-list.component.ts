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
      "ImagenUrl":"https://d3s2hob8w3xwk8.cloudfront.net/autos-landing/nissan/sentra-2023/colores/GRIS-OXFORD.png"
    },
    {
      "productosId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "precio": 30000,
      "Year":2022,
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://platform.cstatic-images.com/in/v2/stock_photos/0ec4ca7b-51ca-4911-9915-67dc18aedbd6/78afd191-7f78-49a0-884d-d625abffed6f.png"
    },
    {
      "productosId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "precio": 150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://lh5.googleusercontent.com/proxy/Qylv7z-lD2Z1HSc8FKUwdo-MitJjHrE_uBWBe5ap1uSScjNTFSgsOcoUkNzb3gPaNzCW7ROFIG63A4J9uOWGs97yTHJWJkPC8UQ9howfcwtWaQ"
    }
  ]
}
