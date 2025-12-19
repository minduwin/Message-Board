const express = require('express');
const router = express.Router();
const { homeControl, newControl, postMsg, showMsg } = require('../controllers/indexControl');

router.get('/', homeControl);
router.get('/new', newControl);
router.post('/new', postMsg);

router.get('/messages/:id', showMsg);

module.exports = router;