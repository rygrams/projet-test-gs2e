const express = require('express');
const passport = require('passport');
const deliverController = require('../controllers/deliver-controller');
const router = express.Router();

router.get('/:id', deliverController.get);
router.get('/', deliverController.list);
router.patch('/:id', passport.authenticate('jwt', { session: false }), deliverController.update);
router.post('/', passport.authenticate('jwt', { session: false }), deliverController.create);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deliverController.delete);


module.exports = router;