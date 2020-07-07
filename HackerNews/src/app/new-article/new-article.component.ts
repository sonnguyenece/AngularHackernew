import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  @Input()
  articles: Article[];
  constructor() { }

  ngOnInit(): void {
  }
  addArticle() {
    let title = (<HTMLInputElement>document.getElementById("article-title")).value;
    // the "problem" is that typescript is typesafe. :) So the document.getElementById() returns the type HTMLElement
    // which does not contain a value property. The subtype HTMLInputElement does however contain the value property.
    let url = (<HTMLInputElement>document.getElementById("article-url")).value;

    if (title == "") return;
    let article = {
      title: title,
      url: url,
      like: 0
    };

    this.articles.push(article);
  }
}
