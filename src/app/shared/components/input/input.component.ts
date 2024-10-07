import { Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

type  ButtonType = "text" | "number" | "tel" | "email" | "password"

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent   {
  @Input() width: string = "auto";
  @Input() height: string = "auto";
  @Input() icon: string = "";
  @Input() label: string = "";
  @Input() Control = new  FormControl();
  @Input() type: ButtonType = "text";

  constructor() { }

  public setValue(event: any){

    this.Control.setValue(event.target.value);

  }

  




}
