// create web server

// import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentsController');

// routes
router.get('/comments', commentController.index);
router.post('/comments', commentController.create);
router.get('/comments/:id', commentController.show);
router.put('/comments/:id', commentController.update);
router.delete('/comments/:id', commentController.delete);

// export module
module.exports = router;