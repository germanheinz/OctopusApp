import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { UserComponent } from './pages/user/user.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {  path: '',     component: PagesComponent,
     children: [
       {  path: '',     component: HomeComponent  },
       {  path: 'home', component: HomeComponent  },
       {  path: 'user', component: UserComponent  },
     ]
  },
  { path: 'login',    component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
