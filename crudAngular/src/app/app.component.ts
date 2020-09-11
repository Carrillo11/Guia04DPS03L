import { Component } from '@angular/core';
import {Alumno } from './models/alumno';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';

  //arreglo del tipo alumno que tiene 3 registros alamacenados
  alumnoArray: Alumno[] = [
    {id:1, name:"Alex", lastname:"Campos", age:35, direccion:"13 calle oriente av Servitos", telefono:78965412, correo:"fer@yahoo.com"},
    {id:2, name:"Maria", lastname:"Lopez", age:20, direccion:"13 calle oriente av rttos", telefono:85462312, correo:"maya@yahoo.com"},
    {id:3, name:"juan", lastname:"Castro",age:25, direccion:"13 calle oriente av Servs", telefono:78965412, correo:"sama@yahoo.com"}
  ]
  //Atributo SelecAlumno del tipo Alumno, por lo tanto, puede almacenar un objeto
  selectedAlumno: Alumno = {id:0, name:'', lastname:'', age:0, direccion:'', telefono:0, correo:""};

  //un metodo que no retorna nada "void", recibe como parametro una variable del 
  //tipo Alumno, para ser asignada al atributo selectAlumno y poder ser mostrado
  //en pantalla
  openForEdit(alumno: Alumno): void
  {
    this.selectedAlumno = alumno;
  }

  //metodo que no retorna nada "void", NO recibe parametro, pero realiza dos
  //operaciones agregar / editar, si no hay registro seleccionado se guarda,
  //de lo contrario limpia el atributo selectedAlumno en pantalla. [(ngModel)]
  addOrEdit(): void
  {
    
    if(this.selectedAlumno.id === 0)  // INSERT
    {
      this.selectedAlumno.id = this.alumnoArray.length + 1;
      this.alumnoArray.push(this.selectedAlumno);
    }
 
    this.selectedAlumno = {id:0, name: '', lastname: '', age:0, direccion:'', telefono:0, correo:""};

  }

  //metodo que no retorna nada "void", NO recibe parametro, elimina del arreglo el
  //registro, pero antes muestra en pantalla un confirmar, se recorre el arreglo
  //realizando un 'filter' para no alamacenar el registro seleccionado en el nuevo
  //arreglo "alumnoArray", por eso ocupados el operador "!=" y luego limpiamos
  //el registro seleccionar
  delete():void
  {
    if(confirm('¿Esta seguro de eliminar el registro?'))
    {
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = {id:0, name: '', lastname: '', age:0, direccion:'', telefono:0, correo:""};
    }
  }


}
