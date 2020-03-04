import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {News} from './newsClass';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private news: Observable<News[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.news = this.db.collection<News>('actualites').valueChanges();
  }

}
