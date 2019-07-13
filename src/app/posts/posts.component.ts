import { Component, OnInit } from "@angular/core";
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
  originalPosts = [this.posts];
  filtered = false;

  getPosts(): void {
    this.postsService.getPosts().subscribe(posts => (this.posts = posts));
  }

  onSelect(e): void {
    this.posts = this.posts.filter(post => post.user === e.target.id);
  }

  ngOnInit() {
    this.getPosts();
    this.tenSeconds();
  }

  usernames = [
    "BobLobLaw",
    "WhoWhatWhenWhereAndWhy",
    "User13135",
    "Noob",
    "ABCDEFB"
  ];

  beginning = [
    "just",
    "ask me how i",
    "totally",
    "nearly",
    "productively",
    "Who",
    "last night i",
    "the president",
    "that dude",
    "a dinosaur",
    "a dog"
  ];

  verbs = [
    "jumpped",
    "ran",
    "fell",
    "drank",
    "slipped",
    "sat",
    "saw",
    "went",
    "tripped",
    "sped",
    "built",
    "started"
  ];

  posess = ["your", "the", "my", "that", "this", "a", "an"];

  nouns = [
    "car",
    "cat",
    "bike",
    "dog",
    "house",
    "mouse",
    "tree",
    "mountain",
    "building",
    "computer",
    "Nicolas Caige"
  ];

  selectRandomElement = arr => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  createRandomSentence = () => {
    return `${this.selectRandomElement(
      this.beginning
    )} ${this.selectRandomElement(this.verbs)} ${this.selectRandomElement(
      this.posess
    )} ${this.selectRandomElement(this.nouns)}`;
  };

  createPost = () => {
    let post = new Post();
    post.user = this.selectRandomElement(this.usernames);
    post.content = this.createRandomSentence();
    post.timeStamp = new Date();
    return post;
  };

  tenTweets = () => {
    for (let i = 0; i < 10; i++) {
      let newPost = this.createPost();
      this.posts.push(newPost);
      console.log(this.posts);
    }
  };

  tenSeconds = () => {
    this.tenTweets();
    setTimeout(this.tenSeconds, 10000);
  };
}
