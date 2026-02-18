const express = require('express');
const router = express.Router();
const tabController = require('../controllers/tabController');
const { protect, restrictTo } = require('../middleware/auth');

router.get('/', tabController.getAllTabs);
router.get('/create', protect, (req, res) => res.render('editor', { isEdit: false }));
router.post('/create', protect, tabController.createTab);
router.post('/delete/:id', protect, restrictTo('admin'), tabController.deleteTab);

module.exports = router;