import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSliderModule} from '@angular/material';
import {LoginComponent} from './pages/login/login.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    AngularFireAuthModule,
    AppRoutingModule,
  ],
  providers: [
    AngularFireAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
