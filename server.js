const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Array of 5 random strings
const randomTexts = [
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "There are 10 kinds of people. Those who know binary and those who don't.",
  `There are two ways of constructing a software design. One way is to make it
    so simple that there are obviously no deficiencies and the other is to make
    it so complicated that there are no obvious deficiencies.`,
  "It's not that I'm so smart, it's just that I stay with problems longer.",
  "It is pitch dark. You are likely to be eaten by a grue.",
];

const linkToRepo = "https://github.com/lionelgtsp/myrepo";

// Set up EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Route to render the main page with an image and random text
app.get("/", (req, res) => {
  const randomText =
    randomTexts[Math.floor(Math.random() * randomTexts.length)];
  res.render("index", { randomText, linkToRepo });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
