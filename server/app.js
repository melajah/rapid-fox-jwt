require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const routes = require("./routes");

app.use(express.json()); // format application/json biasanya dari client html ajax
app.use(express.urlencoded({ extended: true })); // untuk dapet data tipe urlencoded (exL postman)
//endpoint sederhana untuk http://localhost:3000
app.get("/", (req, res) => res.send("Hello World! Welcome to Express"));

app.use(routes);

app.listen(port, () => {
  console.log(`listen on http://localhost:${port}`);
});
