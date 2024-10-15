import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/shared/Controllers/loading/loading.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public email!: FormControl;
  public password!: FormControl;
  public form!: FormGroup;

  constructor(
    private readonly authSrv: AuthService,
    private readonly navCtr: NavController,
    private readonly loadingSrv: LoadingService,
    private readonly alertCtr: AlertController
  ) {
    this.initForm();
  }

  public alertButtons = [
    {
      text: 'Ok',
      cssClass: 'alert-button-confirm',
    },
  ];

  async presentAlert() {
    const alert = await this.alertCtr.create({
      header: 'Failed to log in. Please verify your credentials.',
      buttons: this.alertButtons,
      cssClass: 'custom-alert',
    });

    await alert.present();
  }

  public async doLogin() {
    try {
      await this.loadingSrv.show();
      const { email, password } = this.form.value;

      const userId = await this.authSrv.login(email, password);
      this.navCtr.navigateForward('home');
      await this.loadingSrv.Dismiss();
      console.log('User ID:', userId);
    } catch (error) {
      await this.loadingSrv.Dismiss();
      this.presentAlert();
    }
  }

  private initForm() {
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }
}
