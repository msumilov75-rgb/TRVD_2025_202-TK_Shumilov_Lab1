exports.protect = (req, res, next) => {
    if (!req.session.user) return res.redirect('/login');
    next();
};

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.session.user.role)) {
            return res.status(403).send('Доступ заборонено: недостатньо прав');
        }
        next();
    };
};