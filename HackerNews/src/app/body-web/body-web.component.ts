import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-web',
  templateUrl: './body-web.component.html',
  styleUrls: ['./body-web.component.css']
})
export class BodyWebComponent implements OnInit {

  // article = {
  //   title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
  //   url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  // };
  articles = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];
  // updateArticle() {
  //   this.article.title = document.getElementById("article-title").value;
  //   this.article.url = document.getElementById("article-url").value;
  // }
  addArticle() {
    let title = (<HTMLInputElement>document.getElementById("article-title")).value;
    // the "problem" is that typescript is typesafe. :) So the document.getElementById() returns the type HTMLElement
    // which does not contain a value property. The subtype HTMLInputElement does however contain the value property.
    let url = (<HTMLInputElement>document.getElementById("article-url")).value;

    let article={
      title: title,
      url: url
    };
    console.log(article)
    this.articles.push(article);
  }

  ngOnInit(): void {
  }


}
