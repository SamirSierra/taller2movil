import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bell',
  templateUrl: './bell.component.html',
  styleUrls: ['./bell.component.scss'],
})
export class BellComponent   {

  @Input() tareasNumber: number = 0;

  constructor() { }

  

}
