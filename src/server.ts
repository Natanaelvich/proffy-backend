import express from "express";

const app = express();

app.use(express.json());

app.get("/users", (request, response) => {
  response.status(401).json({ error: "hahahaha" });
});

app.listen(3333, () => console.log("server 3333"));
