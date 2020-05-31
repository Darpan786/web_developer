//jshint esversion:6

// npm init for start a server


const express = require("express");
const app = express();
app.get("/", function (req, res) {
     res.send("<h1> Hello , World</h1>");

})
app.get("/contact", function (req, res) {
     res.send("Contact me at :darpanagarwal1999@gmail.com");

})
app.get("/about", function (req, res) {
     res.send("hello i am darpan agarwal");

})
app.get("/hobbies", function (req, res) {
     res.send("Cricket");

})

app.listen(3000, function () {
     console.log("server started on port 3000");
});