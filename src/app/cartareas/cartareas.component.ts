import { Component } from '@angular/core';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  color: string;  // Propiedad de color
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
  nuevaFecha: string = '';
  tareaEditando: Tarea | null = null;
  colorSeleccionado: string = ''; // Color seleccionado por el usuario

  agregarTarea() {
    const colorFinal = this.colorSeleccionado || 'dark'; // Usar blanco si no hay color seleccionado

    if (this.tareaEditando) {
      this.tareaEditando.titulo = this.nuevoTitulo;
      this.tareaEditando.descripcion = this.nuevaDescripcion;
      this.tareaEditando.fecha = this.nuevaFecha;
      this.tareaEditando.color = colorFinal; // Actualizar color en edición
      this.tareaEditando = null; // Limpiar después de actualizar
    } else {
      const nuevaTarea: Tarea = {
        id: Date.now(),
        titulo: this.nuevoTitulo,
        descripcion: this.nuevaDescripcion,
        fecha: this.nuevaFecha,
        color: colorFinal,  // Asignar color seleccionado
      };
      this.tareas.push(nuevaTarea);
    }
    this.limpiarCampos();
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  iniciarEdicion(tarea: Tarea) {
    this.tareaEditando = tarea;
    this.nuevoTitulo = tarea.titulo;
    this.nuevaDescripcion = tarea.descripcion;
    this.nuevaFecha = tarea.fecha;
    this.colorSeleccionado = tarea.color; // Establecer color al editar
  }

  limpiarCampos() {
    this.nuevoTitulo = '';
    this.nuevaDescripcion = '';
    this.nuevaFecha = '';
    this.colorSeleccionado = ''; // Limpiar color seleccionado
  }
}
