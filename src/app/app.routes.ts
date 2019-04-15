import { Routes } from '@angular/router';
import { UserLoginComponent} from './auth/components/user-login/user-login.component';
import { DefaultComponent } from './auth/components/default/default.component';

export const AppRoutes:Routes = [

{
    path: '',
    component:DefaultComponent
},
{
    path: 'default',
    component:DefaultComponent
},
{
    path:'login',
    component:UserLoginComponent
}

];