import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() posts : Post[];

  constructor(){}

  ngOnInit(): void {
  }

}
