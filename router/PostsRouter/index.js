const express = require('express');
const {body} = require("express-validator");
const postController = require('../../controller/PostController')
const authMiddleware = require('../../middleware/authMiddleware')

const router = express.Router();

router.post('/',
    authMiddleware,
    body('title').isLength({min: 1, max: 20}),
    body('text').isLength({min: 1}),
    postController.createNewPost);

router.get('/posts/:userId', postController.getUsersPost);
router.get('/feed', postController.getPostFeed);



module.exports = router;