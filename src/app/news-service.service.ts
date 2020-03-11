import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {News} from './pages/news/newsClass';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {


  constructor(private fdb: AngularFirestore) {

  }

  getNews() {
    return this.fdb.collection<News>('actualites', ref => ref.orderBy('date', 'desc')).valueChanges();
  }

  getLatestNews() {
    return this.fdb.collection<News>('actualites', ref => ref.orderBy('date', 'desc')).valueChanges().pipe(take((1)));
  }

  createNews(news: News) {
    return this.fdb.collection<News>('actualites').add(news);
  }
}
