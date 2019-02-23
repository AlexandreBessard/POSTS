import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-component/post-list-item/post-list-item.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import {PostService} from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
