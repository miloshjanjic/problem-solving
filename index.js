const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup public folder
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('pages/home');
});
``
app.get('/links', (req, res) => {
  const items = [
    {
      name: 'google',
      url: 'https://google.com'
    },
    {
      name: 'w3schools',
      url: 'https://w3schools.com'
    },
    {
      name: 'GitHub',
      url: 'https://github.com'
    },
    {
      name: 'node.js',
      url: 'https://nodejs.org/en'
    },
    {
      name: 'ejs',
      url: 'https://ejs.co'
    },
    {
      name: 'expressjs',
      url: 'https://expressjs.com'
    }
  ];

  res.render('pages/links', { links: items });
});

app.get('/list', (req, res) => {
  const items = ['GIT','VSC','html', 'css', 'javaScript', 'node.js', 'mongoDb', 'react.js'];
  res.render('pages/list', { list: items });
});

app.get('/table', (req, res) => {
  const items = [
    {
      name: 'node.js',
      url: 'https://nodejs.org/en'
    },
    {
      name: 'ejs',
      url: 'https://ejs.co'
    },
    {
      name: 'expressjs',
      url: 'https://expressjs.com'
    },
    {
      name: 'google',
      url: 'https://google.com'
    },
    {
      name: 'facebook',
      url: 'https://facebook.com'
    }
  ];

  res.render('pages/table', { table: items });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})