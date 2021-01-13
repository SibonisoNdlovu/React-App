const express = require('express');
const app = express(); //listen for incoming requests

//create a route handler
app.get('/', (req, res) => {
    res.send({hi: 'there'});
})

const PORT = process.env.PORT||5000; //dynamic port -- env to tell us which port to use
app.listen(5000); // localhost:5000

