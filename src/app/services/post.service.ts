import { Injectable } from '@angular/core';
import {Post} from '../post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<Post[]>();

  private posts: Post[] = [

    new Post("Mon premier post",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      0,
      new Date()),

    new Post("Mon deuxième post",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      0,
      new Date()),

    new Post("Encore un post",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      0,
      new Date()
    )
  ];

  constructor() { }

  emitPosts(){
    this.postSubject.next(this.posts);
  }

  getPosts(){
   return this.posts.slice();
  }
}
