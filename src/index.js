const path = require('path');
const express = require('express');//đi vào thư mục nodemodule tải express ra
const handlebars  = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));
//http logger
app.use(morgan('combined'))
//template engine
//định nghĩa handlebars
app.engine('handlebars', handlebars());
//set handlerbars bằng view engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/view'));
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('layouts/new');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})