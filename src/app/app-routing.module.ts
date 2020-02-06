import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';

import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {TestComponent} from './test/test.component';
import {DashboradComponent} from './pages/dashborad/dashborad.component';
import {TrombinoscopeComponent} from './pages/trombinoscope/trombinoscope.component';
import {NewsComponent} from './pages/news/news.component';

const routes: Routes = [
  { path: '', component: DashboradComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'dashboard', component: DashboradComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'news', component: NewsComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'trombinoscope', component: TrombinoscopeComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInTo([])) },
  { path: 'logout', component: LoginComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'test', component: TestComponent },
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
