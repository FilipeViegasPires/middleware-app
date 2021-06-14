const express = require("express");
const app = express();
const port = 5000;
const cookieParser = require("cookie-parser");

app.use(logger);
app.use(cookieParser());

app.get("/", goodbye, (request, response) => {
  console.log("Home Page");
  response.send("Welcome to my Middleware App");
});

app.get("/Users", logger, (request, response) => {
  console.log("Users Page");
  response.send("Welcome to your Users Page");
});

function logger(resquest, response, next) {
  console.log("Log");
  next();
}

function goodbye(request, response, next) {
  console.log("Adios");
  next();
}

app.listen(port, (error) => {
  error ? console.log(error) : console.log(`App runnig at port ${port}`);
});
/*
There is one example with an application-level middleware
There is one example with an router-level middleware
There is one example with an third-party middleware 
*/
