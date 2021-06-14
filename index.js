const express = require("express");
const app = express();
const port = 5000;

app.listen(port, (error) => {
  error ? console.log(error) : console.log(`App runnig at port ${port}`);
});
