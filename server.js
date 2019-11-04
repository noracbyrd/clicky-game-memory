const express = require('express');
const app = express();
const PORT = process.env.PORT || 8122;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
}

app.use("/", function(req,res) {
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });