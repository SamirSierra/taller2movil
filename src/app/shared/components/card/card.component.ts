import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() Id: number = 0;
  @Input() Color: string = '';
  @Input() Title: string = '';
  @Input() Date: string = '';
  @Input() Description: string = '';
  @Input() Done: string = '';

  @Output() EliminarTarea: EventEmitter<number> = new EventEmitter();
  @Output() IniciarEdicion: EventEmitter<number> = new EventEmitter();

  constructor() {}

  eliminarTarea(id: number) 
  {
   this.EliminarTarea.emit(id);
  }

  iniciarEdicion(id: number) 
  {
   this.IniciarEdicion.emit(id);
  }
}
