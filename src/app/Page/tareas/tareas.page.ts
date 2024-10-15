import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  color: string;
  userId: string;
}
 

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {
  tareas: Tarea[] = [];
  nuevoTitulo: string = '';
  nuevaDescripcion: string = '';
  tareaTR: Tarea | null = null;
  colorCarta: string = '';
  fechaActual: string = new Date().toLocaleDateString();
  date: string = '';
  userId: string | null = null;

  taskForm: FormGroup;
  image = new FormControl('');
  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  color = new FormControl('');
  dateTime = new FormControl('');

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private readonly firebaseService: FirebaseService,
    private readonly authSrv: AuthService
  ) {
    this.taskForm = this.fb.group({
      image: this.image,
      title: this.title,
      description: this.description,
      color: this.color,
      dateTime: this.dateTime,
    });

    this.taskForm.valueChanges.subscribe((formValues) => {
      this.nuevoTitulo = formValues.title;
      this.nuevaDescripcion = formValues.description;
      this.colorCarta = formValues.color;
      this.fechaActual = formValues.dateTime || this.fechaActual;
    });
  }

  saveTareas() {
    if (this.title && this.description && this.date && this.userId !== null) {
      const newTask = {
        title: this.title,
        description: this.description,
        date: this.date,
        userId: this.userId,
      };

      this.navCtrl.navigateBack('/home');
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }

  limpiarCampos() {
    this.nuevoTitulo = '';
    this.nuevaDescripcion = '';
    this.colorCarta = '';
  }

  iniciarEdicion(tarea: Tarea) {
    this.tareaTR = tarea;
    this.taskForm.patchValue({
      title: tarea.titulo,
      description: tarea.descripcion,
      color: tarea.color,
      dateTime: tarea.fecha,
    });
  }

  submitTask() {
    if (this.taskForm.valid) {
      const nuevaTarea: Tarea = {
        id: Date.now(),
        titulo: this.taskForm.value.title,
        descripcion: this.taskForm.value.description,
        fecha: this.taskForm.value.dateTime || this.fechaActual,
        color: this.taskForm.value.color || 'dark',
        userId: '', 
        
      };
      this.firebaseService
        .addTask(nuevaTarea)
        .then(() => {
          console.log('Tarea guardada exitosamente');
          this.limpiarCampos(); 
        })
        .catch((error) => {
          console.error('Error al guardar la tarea: ', error);
        });
    } else {
      console.log('Formulario inválido');
      console.log('Errores de formulario:', this.taskForm.errors);
    }
  }
}
