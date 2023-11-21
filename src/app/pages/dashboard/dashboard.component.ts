import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { Contacto } from '../../model';
import { NgForm } from '@angular/forms';
import{ FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule ],
  providers:  [ ApiService ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  creds: Contacto = {
    user: '',
    password: ''
  }

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  login(form: NgForm) {
    console.log('form value', form.value);

    // Assuming your login function returns an Observable
    this.apiService.login(this.creds).subscribe(
      response => {
        // Assuming you want to navigate upon successful login
        this.router.navigate(['/login']);
      },
      error => {
        // Handle error if needed
        console.error('Login failed:', error);
      }
    );
  }

}


