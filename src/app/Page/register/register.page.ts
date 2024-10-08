import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/Controllers/loading/loading.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { AlertController, NavController } from '@ionic/angular';
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public image!: FormControl;
  public name!: FormControl;
  public Lastname!: FormControl;
  public Age!: FormControl;
  public Phone!: FormControl;
  public Email!: FormControl;
  public Password!: FormControl;
  public confirmPassword!: FormControl;
  public registerForm!: FormGroup;
  public passwordVisible: boolean = false;
  public confirmPasswordVisible: boolean = false;

  constructor(
    private readonly authSrv: AuthService,
    private readonly Loadingsrv: LoadingService,
    private readonly navCtr: NavController,
    private readonly firebaseService: FirebaseService
  ) {
    this.InitForm();
  }

  public async doRegister() {
    
    console.log('Formulario válido:', this.registerForm.valid);

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched(); 
      console.log('Formulario inválido, revise los campos.');
      return; 
    }

    
    try {
      await this.Loadingsrv.show();
      const userData = this.registerForm.value;
      await this.firebaseService.addUser(userData);
      console.log('User registered: ', userData);

      const { Email, Password } = this.registerForm.value;
      const response = await this.authSrv.register(Email, Password);
      this.navCtr.navigateForward('login');
      await this.Loadingsrv.Dismiss();
    } catch (error) {
      await this.Loadingsrv.Dismiss();
      console.error('Error during registration:', error);
    }
  }

  private InitForm() {
    this.image = new FormControl('');
    this.name = new FormControl('', [Validators.required]);
    this.Lastname = new FormControl('', [Validators.required]);
    this.Age = new FormControl('', [Validators.required ]);
    this.Phone = new FormControl('', [Validators.required,Validators.pattern('^[0-9]*$'),]); 
    this.Email = new FormControl('', [Validators.required, Validators.email]);
    this.Password = new FormControl('', [Validators.required]);
    this.confirmPassword = new FormControl('', Validators.required);
    this.registerForm = new FormGroup(
      {
        image: this.image,
        name: this.name,
        Lastname: this.Lastname,
        Age: this.Age,
        Phone: this.Phone,
        Email: this.Email,
        Password: this.Password,
        confirmPassword: this.confirmPassword,
      },
      { validators: this.passwordMatchValidator }
    );
  }
  private passwordMatchValidator(
    form: AbstractControl
  ): ValidationErrors | null {
    const password = form.get('Password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }
}
