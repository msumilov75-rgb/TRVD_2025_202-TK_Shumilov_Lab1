const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/guitarTabsDB')
    .then(() => console.log('Успішне підключення до MongoDB'))
    .catch(err => console.error('Помилка підключення:', err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'guitar_secret_key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/guitarTabsDB' }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 } 
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));