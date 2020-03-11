import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {News} from './pages/news/newsClass';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {


  constructor(private fdb: AngularFirestore) {

  }

  getNews() {
    return this.fdb.collection<News>('actualites', ref => ref.orderBy('date', 'desc')).valueChanges();
  }

  createNews(news: News) {
    console.log(news);
    this.fdb.collection<News>('actualites').add(news);
  }
}
