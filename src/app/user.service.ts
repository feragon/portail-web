import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fba: AngularFireAuth,
              private router: Router) { }

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.fba.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.fba.auth.signOut().then(value => {
      this.router.navigate(['/login']);
    });
  }

  isUserLogged(): boolean {
    return this.fba.auth.currentUser !== null && !this.fba.auth.currentUser.isAnonymous;
  }

  getUser() {
    return this.fba.auth.currentUser.email;
  }
}
