const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader("Content-Type", "text/plain");

    // write the response body
    res.write("hello world");

    // end the response
    res.end();
});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000");
});