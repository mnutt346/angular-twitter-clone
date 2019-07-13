import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  constructor() {}

  posts = [];
  originalPosts = [...this.posts];
  filtered = false;

  onSelect(e): void {
    this.posts = this.posts.filter(post => post.user === e.target.id);
    this.filtered = true;
  }

  onHomeClick(): void {
    this.posts = this.originalPosts;
    this.filtered = false;
  }

  ngOnInit() {
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
    this.originalPosts = [...this.posts];
  };

  tenSeconds = () => {
    if (this.filtered) {
      return;
    } else {
      this.tenTweets();
      setTimeout(this.tenSeconds, 10000);
    }
  };
}
