import { Component } from '@angular/core';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string; // Propiedad de fecha
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
  tareaEditando: Tarea | null = null;
  colorSeleccionado: string = ''; // Color seleccionado por el usuario
  fechaActual: string = new Date().toLocaleDateString(); // Almacenar la fecha actual

  agregarTarea() {
    const colorFinal = this.colorSeleccionado || 'light'; // Usar blanco si no hay color seleccionado

    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo: this.nuevoTitulo,
      descripcion: this.nuevaDescripcion,
      fecha: this.fechaActual, // Asignar la fecha actual
      color: colorFinal,  // Asignar color seleccionado
    };

    if (this.tareaEditando) {
      this.tareaEditando.titulo = this.nuevoTitulo;
      this.tareaEditando.descripcion = this.nuevaDescripcion;
      this.tareaEditando.color = colorFinal; // Actualizar color en edición
      this.tareaEditando.fecha = nuevaTarea.fecha; // Actualizar fecha en edición
      this.tareaEditando = null; // Limpiar después de actualizar
    } else {
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
    this.colorSeleccionado = tarea.color; // Establecer color al editar
  }

  limpiarCampos() {
    this.nuevoTitulo = '';
    this.nuevaDescripcion = '';
    this.colorSeleccionado = ''; // Limpiar color seleccionado
  }
}
