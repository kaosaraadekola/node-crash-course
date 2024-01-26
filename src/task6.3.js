const express = require('express');
const app = express();
const port = 3000

const stringArray = ["Congrats this is actually your first “JSON Web API”"];

// Create a route that sends the array as a JSON response
app.get('/api/strings', (req, res) => {
  res.json({ stringArray });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });