const http = require ('http')
const fs = require ('fs')

const server = http.createServer ((req, res) => {
 console.log (req.url, req.method)

 //set header content type
res.setHeader("Content-Type", "text/html")


let path = "./views/"
switch (req.url) {
    case "/" :
        path += "index.html";
        break;
    case "/about" :
        path += "about.html"
        break;
    default:
        path += "404.html"
        break;
}

//send an html file
fs.readFile (path, (err, data) => {
    if (err) {
        console.log (err)
        res.end();
    } else {
        res.write (data)
        res.end();
    }
})

// res.write ("hello world")
// res.end()
});

server.listen (3000, "localhost", () => {
 console.log ("listening for requests on port 3000")
})
//local host is like a domain name on the web like google.com. But this one takes us to specific address
//port numbers are like "doors" into a computer

//reponse object is used to send a response to the browser


//http server which sends a random number between 1 and 6 in the body of the HTTP response every time it gets a request.
// function randomDieRoll(){
//     return 1 + Math.floor((Math.random() * 6))
// }

// const server = http.createServer((req, res) => {
   
//     res.setHeader("Content-Type", "text/plain")
//     const randomNumber = randomDieRoll();
//     res.end()
// });

// server.listen (3000, "localhost", () => {
//     console.log ("listening for requests on port 3000")
//    });

