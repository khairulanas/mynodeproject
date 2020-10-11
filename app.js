const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//set dynamic views file
// app.set('views', path.join(__dirname, 'views'));
// //set view engine
// app.set('view engine', 'hbs');
// //set public folder as static folder for static file
// app.use(express.static('public'));
// //route untuk halaman home
// app.get('/', (req, res) => {
//   //render file index.hbs
//   res.render('index');
// });
// //route untuk halaman about
// app.get('/about', (req, res) => {
//   res.send('This is about page');
// });
// app.listen(8000, () => {
//   console.log('Server is running at port 8000');
// });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  //render file index.hbs
  res.render('index', { name: "Khairul anas" });
});

// app.get('/:name', (req, res) => {
//   //render file index.hbs
//   res.render('index', { name: req.params.name });
// });
app.get('/post', (req, res) => {
  res.render('submit', {});
})

app.post('/post', (req, res) => {
  var reqname = req.body.name ?? "no name";

  res.render('index', { name: reqname });

});

app.listen(8000, () => { console.log('Server is running at port 8000'); });