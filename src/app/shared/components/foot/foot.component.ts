import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss'],
})
export class FootComponent  implements OnInit {
  @Input() color_Home: String = "#808080"; 
  @Input() color_Tarea: String = "#808080"; 
  @Input() color_Perfil: String = "#808080"; 
  @Input() color_Salir: String = "#808080";  

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToTareas() {
    this.router.navigate(['/nueva-tarea']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToPerfil() {
    this.router.navigate(['/##']);
  }


}
