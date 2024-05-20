import express from "express";

const port = 5000;

const app = express();

app.get("/", (request, response) => {
  response.send("API is running!");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
