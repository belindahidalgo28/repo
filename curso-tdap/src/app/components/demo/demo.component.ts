import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{

  constructor(){ }

  title = 'Este valor esta siendo manejado desde el archivo que maneja la logica';


  //array items//
  items = ['Perez', 'Lopez', 'Estrada', 'Gonzales', 'Sanchez'];
  
  

  ngOnInit(): void {
    }

 
    //array que alberga objetos
    
  agregarElemento(){
    this.items.push('nuevo item');
  }
  
  eliminarElemento(i: number){
    this.items.splice(i, 1);
  
  }
  
    
}
