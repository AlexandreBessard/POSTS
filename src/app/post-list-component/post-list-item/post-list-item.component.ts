import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postObject: Post;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    this.postObject.loveIts++;
  }

  onDontLoveIt(){
    this.postObject.loveIts--;
  }
}
