const express = require('express');
const path = require('path')
const adminController = require('../controllers/admin')

const router = express.Router();


router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts)
router.get('/edit-product/:productID', adminController.getEditProduct)

router.post('/add-product', adminController.postAddProduct);
router.post('/edit-product', adminController.postEditProduct)

module.exports = router;

