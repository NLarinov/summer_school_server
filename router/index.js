const express = require('express');
const postRouter = require('./PostsRouter')
const videoRouter = require('./VideoRouter')
const userRouter = require('./UserRouter')

const router = express.Router();

router.use('/users', userRouter);
router.use('/videos', videoRouter);
router.use('/posts', postRouter);

module.exports = router;