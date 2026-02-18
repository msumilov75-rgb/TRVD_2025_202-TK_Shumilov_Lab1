const DataModel = require('../models/dataModel');

exports.listTabs = (req, res) => {
    const tabs = DataModel.getAll();
    res.render('index', { tabs }); 
};

exports.createTab = (req, res) => {
    const tabs = DataModel.getAll();
    const newTab = { id: Date.now(), ...req.body };
    tabs.push(newTab);
    DataModel.saveAll(tabs);
    res.redirect('/');
};

exports.deleteTab = (req, res) => {
    let tabs = DataModel.getAll();
    tabs = tabs.filter(t => t.id != req.params.id);
    DataModel.saveAll(tabs);
    res.redirect('/');
};