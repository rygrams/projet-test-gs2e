const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user-controller');
const router = express.Router();

router.post('/login', passport.authenticate('login', { session: false }), userController.login);
router.post('/signup', passport.authenticate('signup', { session: false }), userController.signup);
router.post('/admin', userController.superadmin);
router.get('/me', passport.authenticate('jwt', { session: false }), userController.get);
router.get('/', passport.authenticate('jwt', { session: false }), userController.list);
router.patch('/:id', passport.authenticate('jwt', { session: false }), userController.update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), userController.delete);

module.exports = router;