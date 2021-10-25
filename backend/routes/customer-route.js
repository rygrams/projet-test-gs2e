const express = require('express');
const passport = require('passport');
const customerController = require('../controllers/customer-controller');
const router = express.Router();

router.get('/me', passport.authenticate('jwt', { session: false }), customerController.getMe);
router.get('/:id', passport.authenticate('jwt', { session: false }), customerController.get);
router.get('/', passport.authenticate('jwt', { session: false }), customerController.list);
router.patch('/:id', passport.authenticate('jwt', { session: false }), customerController.update);


module.exports = router;