//http server which sends a random number between 1 and 6 in the body of the HTTP response every time it gets a request.

const http = require ('http')

function randomDieRoll(){
    return 1 + Math.floor((Math.random() * 6))
}

const server = http.createServer((req, res) => {
    console.log(req.url, res.method)
   
    res.setHeader("Content-Type", "text/plain")
    const randomNumber = randomDieRoll();
    res.write(randomNumber.toString());
    res.end()
});

server.listen (3000, "localhost", () => {
    console.log ("listening for requests on port 3000")
   });

