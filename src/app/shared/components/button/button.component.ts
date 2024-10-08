import { Component, Input, OnInit } from '@angular/core';

type ColorButtontype = "success" | "danger" | "primary" | "warning" | "secondary";
type ButtonType = "button" | "submit";
type ExpandType = "block" | "default" | "full";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() width: string = 'auto'; 
  @Input() height: string = 'auto'; 
  @Input({ required: true }) value = '';
  @Input() type: ButtonType = 'button';
  @Input() color: ColorButtontype = 'success';
  @Input() expand: ExpandType = 'default';
  @Input() icon: string = '';
  @Input() customClass: string = '';
  @Input() disable: boolean = false;
 

  constructor() {}
}
