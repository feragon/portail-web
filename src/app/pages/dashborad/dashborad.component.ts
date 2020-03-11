import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore, DocumentData} from '@angular/fire/firestore';
import {News} from '../news/newsClass';
import {NewsServiceService} from '../../news-service.service';
import {Observable} from 'rxjs';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
  private latestNews: Observable<News[]>;
  private user: Observable<User[]>;
  constructor(private newsService: NewsServiceService, private userService: UserService) {

  }

  ngOnInit() {
    this.latestNews = this.newsService.getLatestNews();
    this.user = this.userService.getOneUser();
  }
}
