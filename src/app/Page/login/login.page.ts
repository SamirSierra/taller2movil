import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
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
    private readonly navCtr: NavController
  ) {
    this.initForm();
  }

  public async doLogin() {
    try {
      const {email, password} = this.form.value;
      await this.authSrv.login(email, password);
      this.navCtr.navigateForward("home");
    } catch (error) {
      console.error(error);
    }
    console.log(this.form.value);
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
