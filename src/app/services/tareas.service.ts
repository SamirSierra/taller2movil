import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private tareas: any[] = [];

  constructor() {}

  addTask(task: any) {
    this.tareas.push(this.tareas);
  }

  getTasks() {
    return this.tareas;
  }
}
