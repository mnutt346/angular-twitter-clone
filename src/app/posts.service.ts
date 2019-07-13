import { Injectable } from "@angular/core";
import { Post } from "./post";
import { Posts } from "./tweet-generator";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  getPosts(): Observable<Post[]> {
    return of(Posts);
  }

  constructor() {}
}
