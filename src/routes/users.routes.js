const { Router } = require('express');
const router = Router();

const {
    renderSignUpForm,
    renderSinginForm,
    signup,
    singin,
    logout

} = require('../controllers/users.controller');
const { log } = require('handlebars');

router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signup);

router.get('/users/signin', renderSinginForm);

router.post('/users/signin', singin);

router.get('/users/logout', logout)

module.exports = router;