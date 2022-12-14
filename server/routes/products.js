const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')
const productValidator = require('../validator/productValidator')
const productUpdateValidator = require('../validator/productsUpdateValidator')
const validateFields = require('../middlewares/validator')

router.get('/', productsController.getProducts)
router.get('/:id', productsController.getOneProducts)
router.post('/create', productValidator, validateFields.validateFields ,productsController.addProduct)
router.put('/edit/:id',productUpdateValidator, validateFields.validateFields , productsController.editProduct)
router.delete('/delete/:id', productsController.deleteProduct)





module.exports = router