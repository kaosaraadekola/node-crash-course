const express = require('express');
const app = express();
const port = 3000;
const { makeDBConnectionPool } = require ("./dbhelp")
const pool = makeDBConnectionPool ("omdb")

let myMovieData = []

// Creating a route that sends the array as a JSON response
app.get('/omdb', (req, res) => {
  res.json({ myMovieData});
});

function displayMovies(movieRows) {
    for (let row of movieRows) {
        myMovieData.push(row.movie_name);
    }
    return myMovieData;
}

function moviesArray () {
    pool.query("select movie_name from casts_view where person_name = 'Sam Worthington'").then((results) => {
        displayMovies(results.rows);
    });
}

moviesArray();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });