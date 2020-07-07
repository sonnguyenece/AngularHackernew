import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Articles} from "../articles";
import {Article} from "../article";

@Component({
  selector: 'app-body-web',
  templateUrl: './body-web.component.html',
  styleUrls: ['./body-web.component.css']
})
export class BodyWebComponent implements OnInit {

  private list: Articles;
  articles: Article[];

  constructor() {
  }

  ngOnInit(): void {
    this.list = new Articles();
    this.articles = this.list.articles;
  }


}
