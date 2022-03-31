const express = require("express");
const port = process.env.PORT || 4004;
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors')
const users = require('./routes/users')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors())
app.use(users);

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });