import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input()
  likes: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  likeThis() {
    this.likes++;
  }
}
