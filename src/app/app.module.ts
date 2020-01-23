import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule
} from '@angular/material';
import {LoginComponent} from './pages/login/login.component';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {TestComponent} from './test/test.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {HomeComponent} from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatGridListModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AppRoutingModule,
  ],
  providers: [
    AngularFireAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
