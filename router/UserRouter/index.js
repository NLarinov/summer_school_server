const express = require('express');
const { body } = require('express-validator')
const userController = require('../../controller/UserController')
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello');
})

router.post('/signUp',
    body('email').isEmail(),
    body('password').isLength({min: 5, max: 32}),
    body('name').isLength({min: 1, max: 20}),
    body('surname').isLength({min: 1, max: 20}),
    userController.signUp
);

router.post('/signIn',
    body('email').isEmail(),
    body('password').isLength({min: 5, max: 32}),
    userController.signIn
);

router.get('/logout', userController.logout);
router.get('/refreshToken', userController.refresh);

module.exports = router;