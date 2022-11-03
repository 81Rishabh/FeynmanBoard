const express = require('express');
const router = express.Router();
const addTopics = require('./addTopic');
const users = require('./user');

router.use('/topic'  , addTopics);
router.use('/user'  , users);

module.exports = router;