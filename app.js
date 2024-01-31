const express = require ("express")

//this connection is for the omdb task
const { makeDBConnectionPool } = require ("./dbhelp")
const pool = makeDBConnectionPool ("omdb")

//express app
const app = express();

//registering view engine
app.set("view engine", "ejs")

//listening for requests 
app.listen(3000);

//static files = images, css etc
app.use (express.static ("public"))

app.get('/', (req, res) => {
    res.render('index');
});


app.get("/about", (req, res) => {
    res.render("about")
});

//redirects
app.get("/blogs/create", (req, res) => {
    res.render("create")
});



//getting movies Sam has been in from the movie omdb
app.get('/movies', async (req, res) => {
    const dbResult = await pool.query ("select movie_name from casts_view where person_name = 'Sam Worthington'");
    res.render('movies', {movies: dbResult.rows});
});



// 
app.get('/objectofquotes', (req, res) => {
    const quotes = [
        { title: "Quote One", snippet: "Believe you can, and you're halfway there." },
        { title: "Quote Two", snippet: "The only way to do great work is to love what you do." },
        { title: "Quote Three", snippet: "The future belongs to those who believe in the beauty of their dreams." },
    ];
    res.render('objectofquotes', { quotes : quotes });
});


//
app.get('/arrayofteams', (req, res) => {
    const teams = ["Manchester United", "Manchester City", "Chelsea", "Liverpool"];
    res.render('arrayofteams', {teams});
});


//if user types a random url this takes them to error page
app.use((req, res) => {
        res.status(404).render("404")
    });
