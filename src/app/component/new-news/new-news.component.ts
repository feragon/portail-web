import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from '../../news-service.service';
import {News} from '../../pages/news/newsClass';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.css']
})
export class NewNewsComponent implements OnInit {
  title = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.required]);

  newsAddForm = this.fb.group({title: this.title, content: this.content});

  constructor(private newsService: NewsServiceService,
              private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    const news: News = {title: this.title.value, content: this.content.value, date: Timestamp.now()};

    this.newsService.createNews(news);
  }

}
