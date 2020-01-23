import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebase: AngularFireAuth) { }

  ngOnInit() {
  }

  getUserName() {
    return this.firebase.auth.currentUser.email;
  }

}
