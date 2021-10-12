const path = require('path');
const express = require('express'); //đi vào thư mục nodemodule tải express ra
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./routes');

//route init

//action--dispather---function handler
app.use(express.static(path.join(__dirname, 'public')));

//apply middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//http logger
app.use(morgan('combined'));
//template engine
//định nghĩa handlebars
app.engine('handlebars', handlebars());
//set handlerbars bằng view engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));

route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
