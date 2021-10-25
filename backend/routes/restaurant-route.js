const express = require('express');
const passport = require('passport');
const storage = require('../configs/storage-config');
const restaurantController = require('../controllers/restaurant-controller');
const router = express.Router();

router.get('/:id', restaurantController.get);
router.get('/', restaurantController.list);
router.patch('/:id', passport.authenticate('jwt', { session: false }), storage.single("image"), restaurantController.update);
router.post('/', passport.authenticate('jwt', { session: false }), storage.single("image"), restaurantController.create);
router.delete('/:id', passport.authenticate('jwt', { session: false }), restaurantController.delete);


module.exports = router;