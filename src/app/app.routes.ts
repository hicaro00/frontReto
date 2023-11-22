import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/DashboardComponent';

export const routes: Routes = [
        {
        path:'login',
        component: LoginComponent
        },
        {
        path:'auth',
        component:DashboardComponent
        },
        { path: '', redirectTo: '/auth', pathMatch: 'full' },


];
