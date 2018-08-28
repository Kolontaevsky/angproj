import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DataService {
  url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url + 'posts');
  }

  getUsers() {
    return this.http.get(this.url + 'users');
  }

  getComments(postId: number) {
    return this.http.get(this.url + 'comments?postId=' + postId);
  }

  getAlbums() {
    return this.http.get(this.url + 'albums');
  }

  getPhoto(photoId: number) {
    return this.http.get(this.url + 'photos?id=' + photoId);
  }
}
