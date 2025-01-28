let Parser = require("rss-parser");
let parser = new Parser();
// import { doc, addDoc, collection } from "firebase/firestore";
// import firestore from "../../firebaseConnection/firebase";

(async () => {
  let feed = await parser.parseURL(
    "https://abcnews.go.com/abcnews/usheadlines"
  );
  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log("title:" + item.title, "link:" + item.link);
    // (async () => {
    //   await addDoc(collection(firestore, "blogs"), {
    //     Title: item.title,
    //     link: item.link,
    //   });
    // })();
  });
})();
