import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {News} from './newsClass';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private news: Observable<News[]>;
  private canCreateNews: boolean;

  constructor(private db: AngularFirestore, private userService: UserService) {
    this.canCreateNews = false;
  }

  ngOnInit() {
    this.userService.getRole().then(role => {
      this.canCreateNews = (role === 'admin');
    });
    this.news = this.db.collection<News>('actualites').valueChanges();
  }

}
