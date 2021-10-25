const express = require('express');
const passport = require('passport');
const productController = require('../controllers/product-controller');
const router = express.Router();
const storage = require('../configs/storage-config');

router.get('/:id', productController.get);
router.get('/', productController.list);
router.patch('/:id', passport.authenticate('jwt', { session: false }), storage.single("image"), productController.update);
router.post('/', passport.authenticate('jwt', { session: false }) , storage.single("image"), productController.create);
router.delete('/:id', passport.authenticate('jwt', { session: false }), productController.delete);


module.exports = router;