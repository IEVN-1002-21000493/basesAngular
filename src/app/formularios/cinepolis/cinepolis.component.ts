import { Component } from '@angular/core';
import { FormGroup,FormControl, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  formulario!:FormGroup
  resultado!:string | number;
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('',Validators.required),
      cantidad_persona: new FormControl('', Validators.required),
      tarjeta: new FormControl('', Validators.required),
      cantidad_boletos: new FormControl('', Validators.required)
    })
  }
  calcularboletos():void{
    const nombre = this.formulario.get('nombre')?.value;
    const cantidad_persona = this.formulario.get('cantidad_persona')?.value;
    const tarjeta =  this.formulario.get('tarjeta')?.value;
    const cantidad_boletos =  this.formulario.get('cantidad_boletos')?.value;
    const limite = cantidad_persona * 7;
    if(limite < cantidad_boletos){
      this.resultado = 'Error maximo persona'
    }else{
      let total = cantidad_boletos * 12;
      if(cantidad_boletos > 5)
        total = total-(total * .15)
      else if(cantidad_boletos >= 3 && cantidad_boletos <=5)
        total = total-(total * .10)
      if(tarjeta == 'si')
        total = total - (total * .10);

      this.resultado = total;
    }
    
  }
}
