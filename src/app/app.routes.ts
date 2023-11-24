import { Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { DashboardinitComponent } from './pages/dashboardinit/dashboardinit.component';
import { ExchageformComponent } from './pages/exchageform/exchageform.component';
import { BoardComponent } from './pages/board/board.component';

export const routes: Routes = [
        
        {path: '', redirectTo: '/auth', pathMatch: 'full' },
        {path:'auth', component: SigninComponent},
        {path:'dashboard',component: DashboardinitComponent},
        {path:'form',component: ExchageformComponent},
        {path:'main', component: BoardComponent}
        
        

];
