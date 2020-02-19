const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');

const app = express();

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'client/build')))};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/getUsers', (req,res) => {
    var users = ["Adam", "Paul", "Alan"];
    res.json(users);
    console.log('Sent list of users');
});

// app.get('/api/getMovies', (req,res) => {
//     var movies = ["Man of steel", "Batman vs Superman", "Justice League"];
//     res.json(movies);
//     console.log('Sent list of movies');
// });

// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds035816.mlab.com:35816/heroku_fkjpdqkd");

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);