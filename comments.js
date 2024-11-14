//Create web server
var express = require('express');
var app = express();

//Create an object
var comments = {
    "1": "This is the first comment",
    "2": "This is the second comment",
    "3": "This is the third comment"
};

//Create a route
app.get('/comments', function(req, res) {
    //Send the object as a response
    res.json(comments);
});

//Listen on port 3000
app.listen(3000);