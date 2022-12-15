
const express = require('express');
const router = express.Router();
const product = require('../modules/productModule');

router.get('/get', product.getProduct);

router.post('/create', product.createProduct)

router.put('/update/:productId', product.updateProduct)

router.delete('/delete/:productId', product.deleteProduct);

module.exports = router;