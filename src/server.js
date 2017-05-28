// require all dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const getImage = require('./get-image');

app.set('views', './views');
app.set('view engine', 'pug');
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(express.static('public'))

const template = { 
      title: 'Booky McBookface', 
      path: '',
      result: ''
    };

app.get('/',  (req, res) => {
    res.render('index', template);
});

app.post('/',  (req, res) => {
    const path = req.body.path;
    getImage(path, (result) => {
      res.render('index', Object.assign(template, {
          path: path,
          result: result
      }));
      res.end();
    });
});
 
app.listen(8888, () => console.log('Listening on http://localhost:8888'));