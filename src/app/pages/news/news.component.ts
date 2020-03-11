import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {News} from './newsClass';
import {UserService} from '../../user.service';
import {NewsServiceService} from '../../news-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private news: Observable<News[]>;
  private canCreateNews: boolean;

  constructor(private newsService: NewsServiceService, private userService: UserService) {
    this.canCreateNews = false;
  }

  ngOnInit() {
    this.userService.getRole().then(role => {
      this.canCreateNews = (role === 'admin');
    });
    this.news = this.newsService.getNews();
  }

}
