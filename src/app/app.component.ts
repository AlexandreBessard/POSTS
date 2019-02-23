import { Component } from '@angular/core';
import {Post} from './post.model';
import {Subscription} from 'rxjs';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postTitle = 'Posts';

  postSubscription: Subscription;
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts : Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
