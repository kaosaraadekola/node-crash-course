// website with express which serves two different .html files (with sendFile) when requests are made to either the route /page1 or  /page2. 

const express = require ("express")

//express app
const app = express();

//listening for requests 
app.listen(3000);

app.get("/", (req, res) => {
    res.send ("<p> Home Page </p>");
});

app.get("/page1", (req, res) => {
    res.send ("<p> Page One </p>");
});

app.get("/page2", (req, res) => {
    res.send ("<p> Page Two </p>");
});

