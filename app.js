const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log(`connected to DB! to ${process.env.DB_CONNECTION}`)
);

// How do we start listening to the server
/**
 * now listing the server on port number 3000 :)
 */

 app.listen(port, ()=>console.log("Server is live at port ${port} 🔥🔥🔥"));
