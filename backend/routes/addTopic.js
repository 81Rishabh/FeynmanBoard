const express = require('express');
const router = express.Router();
const addtopicController = require('../controller/addTopicController');

router.get('/' , addtopicController.getTopics);
router.post('/addNewTopic' , addtopicController.addTopics);

module.exports = router;