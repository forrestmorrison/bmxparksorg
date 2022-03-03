const express = require("express");
const port = process.env.PORT || 4004;
const comments = require('./data/comments');
const parks = require('./data/parks');
const users = require('./data/users');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));



app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });