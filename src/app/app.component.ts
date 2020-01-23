import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor(private fba: AngularFireAuth,
              private router: Router
  ) { }

  logout() {
    return this.fba.auth.signOut().then(
      value => {
        return this.router.navigate(['/login']);
      }
    );
  }
}
