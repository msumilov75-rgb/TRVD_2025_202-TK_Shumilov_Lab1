const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const tabRoutes = require('./src/routes/tabRoutes');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', tabRoutes);
app.listen(3000, () => {
    console.log('Сервер запущено на http://localhost:3000');
});