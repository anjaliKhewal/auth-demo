import { Routes } from '@angular/router';
import { UserLoginComponent} from './auth/components/user-login/user-login.component';
import { DefaultComponent } from './auth/components/default/default.component';
import { DashboardComponent } from './auth/components/dashboard/dashboard.component';

export const AppRoutes:Routes = [

{
    path: '',
    component:DefaultComponent
},
{
    path: 'profile',
    component:DefaultComponent
},
{
    path:'login',
    component:UserLoginComponent
},
{
    path:'dashboard',
    component:DashboardComponent
}

];