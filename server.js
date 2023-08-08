const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./controllers');

const app = express();
const PORT = process.env.port ?? 3001;
const hbs = exphbs.create({ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
  res.render('landing-page');
});


app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT}`
    )
  );