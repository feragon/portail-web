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
import { NavComponent } from './component/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DashboradComponent } from './pages/dashborad/dashborad.component';
import {LogoutComponent} from './pages/logout/logout.component';
import { TrombinoscopeComponent } from './pages/trombinoscope/trombinoscope.component';
import { NewsComponent } from './pages/news/news.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { UserComponent } from './component/user/user.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { NewNewsComponent } from './component/new-news/new-news.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    NavComponent,
    DashboradComponent,
    LogoutComponent,
    TrombinoscopeComponent,
    NewsComponent,
    DocumentsComponent,
    UserComponent,
    NewNewsComponent,
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
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FontAwesomeModule,
  ],
  providers: [
    AngularFireAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
