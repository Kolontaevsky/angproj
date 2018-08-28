import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {P} from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  public posts;
  like = 'far fa-heart';

  constructor(private _dataService: DataService) {
    this.getPosts();
  }

  getPosts() {
    this._dataService.getPosts().subscribe(
      data => { this.posts = data; },
      error => console.error(error)
    );
  }

  likeButtonClick(object) {
    if (object.like == null || object.like == 'far fa-heart') {
      object.like = 'fas fa-heart';
    } else {
      object.like = 'far fa-heart';
    }
  }

  commentsButtonClick(post) {
    if (!post.comments) {
      this._dataService.getComments(post.id).subscribe(
        data => {
          post.comments = data;
        },
        error => console.error(error)
      )
    } else {
      post.comments = null;
    }
  }

  addComment(post, comment: string) {
    console.log(post);
    /*if (comment == '') {
      alert('Comment cannot be empty.');
      return;
    } else {*/
      let newComment: {
        postId: number;
        id: number;
        name: string;
        email: string;
        body: string;
      };

      newComment.postId = post.id;

      let ids = [];
      for (let i = 0; i < post.comments.length; i++) {
        ids.push(post.comments[i].id);
      }

      let maxId = Math.max.apply(Math, ids);

      console.log(maxId);

      //post.comments.push()
    }
  }
}
