import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://www.jacobtuma.com';
    this.votes = 20;
  }

  voteUp() {
    this.votes++;
    return false;
  }

  voteDown() {
    this.votes--;
    return false;
  }

  ngOnInit() {
  }

}
