import { Component, OnInit } from "@angular/core";
import { Posts } from "../tweet-generator";
import { Post } from "../post";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  posts: Post[];

  getPosts(): void {
    this.postsService.getPosts().subscribe(posts => (this.posts = posts));
  }

  public onSelect(e): void {
    this.posts = this.posts.filter(post => post.user === e.target.id);
  }

  ngOnInit() {
    this.getPosts();
  }
}
