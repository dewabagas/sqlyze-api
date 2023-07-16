const express = require('express')
require('dotenv').config();
const path = require('path');
const app = express()
const port = process.env.PORT || 3000

const userRoutes = require("./routes/user")
const lessonRoutes = require("./routes/material")
const quizRoutes = require("./routes/quiz")
const analyticRoutes = require("./routes/analytic")

app.use(express.json())
app.use('/users', userRoutes)
app.use('/lessons', lessonRoutes)
app.use('/quizzes', quizRoutes)
app.use('/analytics', analyticRoutes)

// Middleware for setting MIME type for CSS files
app.use(function(req, res, next) {
  if (req.originalUrl.includes('.css')) {
    res.header('Content-Type', 'text/css');
  }
  next();
});

app.use(express.static('public'));
app.use('/htmls', express.static('htmls'));  // added line

app.get('/htmls/:filename', function(req, res) {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, 'htmls', filename));
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to sqlize api." });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
