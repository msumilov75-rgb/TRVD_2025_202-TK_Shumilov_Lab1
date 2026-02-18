const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { login, email, password } = req.body;
        await User.create({ login, email, password, role: 'user' });
        res.redirect('/login');
    } catch (err) {
        res.status(400).send("Помилка реєстрації: користувач вже існує");
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = { id: user._id, login: user.login, role: user.role };
        res.redirect('/');
    } else {
        res.send('Невірний email або пароль');
    }
};