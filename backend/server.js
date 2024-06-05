import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 3,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 4,
      title: "What do you call cheese that isn't yours?",
      content: "Nacho cheese!",
    },
    {
      id: 5,
      title: "Why don't skeletons fight each other?",
      content: "They don't have the guts.",
    },
    {
      id: 6,
      title: "What do you get if you cross a snowman and a vampire?",
      content: "Frostbite.",
    },
    {
      id: 7,
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired!",
    },
    {
      id: 8,
      title: "How does a penguin build its house?",
      content: "Igloos it together.",
    },
    {
      id: 9,
      title: "What do you get when you cross an elephant with a rhino?",
      content: "Elephino!",
    },
    {
      id: 10,
      title: "Why was the math book sad?",
      content: "Because it had too many problems.",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
