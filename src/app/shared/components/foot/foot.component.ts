import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss'],
})
export class FootComponent {
  @Input() color_Home: string = '#808080';
  @Input() color_Tarea: string = '#808080';
  @Input() color_Perfil: string = '#808080';
  @Input() color_Salir: string = '#808080';

  constructor(
    private readonly router: Router,
    private readonly authSrv: AuthService
  ) {}

  navigateToTareas() {
    this.router.navigate(['/nueva-tarea']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  
  dologOut() {
    this.authSrv
      .logout()
      .then(() => {
        this.router.navigate(['/login']); 
      })
      .catch((error) => {
        console.error('Error al cerrar sesión: ', error);
      });
  }
}
