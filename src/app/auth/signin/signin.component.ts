import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { Contacto } from '../../model';
import { Validators, FormBuilder ,ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,FormsModule, MatCardModule,ReactiveFormsModule,MatButtonModule ],
  
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent   {

      loginError:string="";

      loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      });

      creds: Contacto = {
      user: '',
      password: ''
      };

    constructor(private formBuilder: FormBuilder
               ,private router: Router
               ,private loginService: LoginService) {

      
    }
 
  get user(){
    return this.loginForm.controls.user;
  }
  get password() {
    return this.loginForm.controls.password;
  }
  login(){
    if(this.loginForm.valid){
      this.loginError="";
      this.loginService.login(this.loginForm.value as Contacto).subscribe ({
        next: (userData)=>{
          console.log(userData);
        
        },
        error: (errorData)=>{
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: ()=>{
          console.log("complete");
          this.router.navigate(["/main"]);
          this.loginForm.reset();
        
        }
      })
      ;
    }else{
      this.loginForm.markAllAsTouched();
      alert("Debe ingresar usuario y contraseña");
    }
    
  }

}

   
  

  
  



