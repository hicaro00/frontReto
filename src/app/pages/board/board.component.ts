import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginService} from '../../services/auth/login.service';
import {DashboardinitComponent} from '../dashboardinit/dashboardinit.component';
import {ExchageformComponent} from '../exchageform/exchageform.component';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule,DashboardinitComponent, ExchageformComponent,MatCardModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {

  userLoginOn:boolean=false;
  userData? : any;

  constructor(private loginService:LoginService ) { }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

    this.loginService.userData.subscribe({
      next:(userData)=>{
        this.userData=userData;
      }
    });
  }
}
