import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { Contacto } from '../../model';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [ApiService, HttpClientModule, ReactiveFormsModule, FormBuilder],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public myForm!: FormGroup;
  isLoggedIn = false

  creds: Contacto = {
    user: '',
    password: ''
  };

  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }




  login(form: NgForm) {
    console.log('form value', form.value);

    // Use form.value to get the form data
    this.apiService.login(form.value).subscribe(
      response => {
        // Navigate to the dashboard upon successful login
        this.isLoggedIn = true;
        this.router.navigate(['login']);
      },
      error => {
        // Handle error if needed
        console.error('Login failed:', error);
      }
    );
  }

}
