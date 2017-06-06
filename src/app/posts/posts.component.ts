import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

@Input()
 public list;

  constructor() {
    // this.list = ['Item1', 'Item2'];
   }

  ngOnInit() {
  }

}
