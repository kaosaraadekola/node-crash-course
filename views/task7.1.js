const express = require ("express")

//express app
const app = express();

//registering view engine
app.set("view engine", "ejs")

//listening for requests 
app.listen(3000);

app.get("/", (req, res) => {
    res.render ("index");
});

app.get("/about", (req, res) => {
    res.render("about")
});

//redirects
app.get("/blogs/create", (req, res) => {
    res.render("/blogs/create")
});

//if user types a random url this takes them to error page
app.use((req, res) => {
        res.status(404).render("404")
    });


// app.get("/page2", (req, res) => {
//     res.send ("<p> Page Two </p>");
// });