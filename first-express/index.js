const express = require("express");

const app = express();

// app.use((req, res) => {
//   console.log("hello world");
//   res.send(`Ini String`);
// });

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/blog/:judul", (req, res) => {
  const { judul } = req.params;
  res.send(`Blog Page ${judul}`);
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("*", (req, res) => {
  res.send("404 Not Found");
});

app.listen(8080, () => {
  console.log("Server is runing on http://localhost:8080");
});
