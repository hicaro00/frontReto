import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/auth/login.service';
import  {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ExchangeRate } from '../../model';


@Component({
  selector: 'app-dashboardinit',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatTableModule ],
  
  templateUrl: './dashboardinit.component.html',
  styleUrl: './dashboardinit.component.css'
})
export class DashboardinitComponent implements OnInit {

  displayedColumns: string[] = [ 'FROM', 'TO', 'RATE'];
  userLoginOn:boolean=false;
  dataSource = ELEMENT_DATA;
  userData? : any;
  data: ExchangeRate[] = [];

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
 
    this.llenarData()

   

  }

  

  llenarData() {
    this.loginService.getAllExchanges().subscribe(data => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

}


const ELEMENT_DATA: ExchangeRate[] = [
  
];



  


