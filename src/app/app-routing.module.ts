import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';

import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInTo([])) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
