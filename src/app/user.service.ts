import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {News} from './pages/news/newsClass';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private itemsCollection: AngularFirestoreCollection<User>;
  items: Observable<User[]>;

  constructor(private fba: AngularFireAuth,
              private fdb: AngularFirestore,
              private router: Router) {

    this.itemsCollection = fdb.collection<User>('user');
    this.items = this.itemsCollection.valueChanges();
  }

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

  getRole() {
    return this.fba.auth.currentUser.getIdTokenResult().then(token => {
      return token.claims.role;
    });
  }

  getOneUser() {
    return this.fdb.collection<User>('user').valueChanges().pipe(take((1)));
  }
}
