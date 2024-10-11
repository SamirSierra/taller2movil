import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
 

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {
  title: string = '';
  description: string = '';
  date: string = '';
  userId: number | null = null;

  constructor(private navCtrl: NavController) {}

  saveTareas() {
    if (this.title && this.description && this.date && this.userId !== null) {
      const newTask = { title: this.title, description: this.description, date: this.date, userId: this.userId };
   

      this.navCtrl.navigateBack('/home');
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }
}
