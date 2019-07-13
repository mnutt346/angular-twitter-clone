import { Post } from "./post";

export let Posts = [];

let usernames = [
  "BobLobLaw",
  "WhoWhatWhenWhereAndWhy",
  "User13135",
  "Noob",
  "ABCDEFB"
];

let beginning = [
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

let verbs = [
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

let posess = ["your", "the", "my", "that", "this", "a", "an"];

let nouns = [
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

let selectRandomElement = arr => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

let createRandomSentence = () => {
  return `${selectRandomElement(beginning)} ${selectRandomElement(
    verbs
  )} ${selectRandomElement(posess)} ${selectRandomElement(nouns)}`;
};

let createPost = () => {
  let post = new Post();
  post.user = selectRandomElement(usernames);
  post.content = createRandomSentence();
  post.timeStamp = new Date();
  return post;
};

let tenTweets = () => {
  for (let i = 0; i < 10; i++) {
    let newPost = createPost();
    Posts = [...Posts];
    Posts.push(newPost);
    console.log(Posts);
  }
};

let tenSeconds = () => {
  tenTweets();
  setTimeout(tenSeconds, 10000);
};
tenSeconds();
