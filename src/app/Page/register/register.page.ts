import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/Controllers/loading/loading.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public confirmPassword!: FormControl;
  public image!: FormControl;
  public name!: FormControl;
  public Lastname!: FormControl;
  public Age!: FormControl;
  public Phone!: FormControl;
  public Email!: FormControl;
  public Password!: FormControl;
  public registerForm!: FormGroup;
  constructor(
    private readonly authSrv: AuthService,
    private readonly Loadingsrv: LoadingService
  ) {
    this.InitForm();
  }

  public async doRegister() {
    try {
      await this.Loadingsrv.show();
      console.log(this.registerForm.value);
      const { Email, Password } = this.registerForm.value;
      const response = await this.authSrv.register(Email, Password);
      await this.Loadingsrv.Dismiss();
    } catch (error) {
      await this.Loadingsrv.Dismiss();
      console.error(error);
    }
  }

  private InitForm() {
    this.image = new FormControl('');
    this.name = new FormControl('', [Validators.required]);
    this.Lastname = new FormControl('', [Validators.required]);
    this.Age = new FormControl('', [Validators.required]);
    this.Phone = new FormControl('', [Validators.required, Validators.email]);
    this.Email = new FormControl('', [Validators.required]);
    this.Password = new FormControl('', [Validators.required]);
    this.confirmPassword = new FormControl('', Validators.required);
    this.registerForm = new FormGroup({
      image: this.image,
      name: this.name,
      Lastname: this.Lastname,
      Age: this.Age,
      Phone: this.Phone,
      Email: this.Email,
      Password: this.Password,
      confirmPassword: this.confirmPassword,
    }, );
  }
  private passwordMatchValidator(form: FormGroup) {
    return form.get('Password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }
}
