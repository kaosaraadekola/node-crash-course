// website with express which has two routes: /roll1 or /roll2.  use res.send() to send a simple string back the the case of either request.  The string should contain the results of a dice roll (either 1 d6 die, or 2 d6 dice summed, respectively)

const express = require ("express")

function randomDieRoll(){
    return 1 + Math.floor((Math.random() * 6))
}

//express app
const app = express();

//listening for requests 
app.listen(3000);

app.get("/roll1",(req, res) => {
    let num = randomDieRoll();
    res.send("random num is" + num)
});
