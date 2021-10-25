const express = require('express');
const passport = require('passport');
const orderController = require('../controllers/order-controller');
const router = express.Router();

router.get('/:id', orderController.get);
router.get('/', orderController.list);
router.patch('/:id', passport.authenticate('jwt', { session: false }), orderController.update);
router.post('/', passport.authenticate('jwt', { session: false }), orderController.create);
router.delete('/:id', passport.authenticate('jwt', { session: false }), orderController.delete);


module.exports = router;