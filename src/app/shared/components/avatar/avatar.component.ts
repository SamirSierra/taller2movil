import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent  implements OnInit {
  protected image = "https://ionicframework.com/docs/img/demos/avatar.svg";
  @Input() control = new FormControl();
  @Input() onlyView = false;

  protected mimeType = "image/jpeg";

  constructor() { }

  ngOnInit() {}

  public uploadFile(event: any) {
    
  }

}
