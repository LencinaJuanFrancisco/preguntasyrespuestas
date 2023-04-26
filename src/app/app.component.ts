import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 listEstudiantes: any[]=[
  {nombre:'Tomas',estado:'Promocionado'},
  {nombre:'Francisco',estado:'Regular'},
  {nombre:'Gaston',estado:'Promocionado'},
  {nombre:'Fabio',estado:'Libre'},
 ]
mostrar= true

 toogle():void{
  this.mostrar = !this.mostrar
 }
}
