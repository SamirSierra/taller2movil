import { Component } from '@angular/core';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  color: string; 
}

@Component({
  selector: 'app-cartareas',
  templateUrl: './cartareas.component.html',
  styleUrls: ['./cartareas.component.scss'],
})
export class CartareasComponent {
  tareas: Tarea[] = [];
  nuevoTitulo: string = '';
  nuevaDescripcion: string = '';
  tareaTR: Tarea | null = null;
  colorCarta: string = ''; 
  fechaActual: string = new Date().toLocaleDateString(); 

  agregarTarea() {
    const colorFinal = this.colorCarta || 'dark'; 
    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo: this.nuevoTitulo,
      descripcion: this.nuevaDescripcion,
      fecha: this.fechaActual, 
      color: colorFinal,  
    };

    if (this.tareaTR) {
      this.tareaTR.titulo = this.nuevoTitulo;
      this.tareaTR.descripcion = this.nuevaDescripcion;
      this.tareaTR.color = colorFinal; 
      this.tareaTR.fecha = nuevaTarea.fecha; 
      this.tareaTR = null; 
    } else {
      this.tareas.push(nuevaTarea);
    }
    this.limpiarCampos();
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  iniciarEdicion(tarea: Tarea) {
    this.tareaTR = tarea;
    this.nuevoTitulo = tarea.titulo;
    this.nuevaDescripcion = tarea.descripcion;
    this.colorCarta = tarea.color; 
  }

  limpiarCampos() {
    this.nuevoTitulo = '';
    this.nuevaDescripcion = '';
    this.colorCarta = ''; 
  }
}
