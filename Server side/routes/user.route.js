const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
router.post('/signup', userController.registerUser);
router.post('/signin', userController.userSignIn);
router.get('/shipping', userController.userCheckout);
router.get('/payment', userController.paymentPage);
router.post('/payment', userController.saveOrderDetails);
router.post('/admin-signup', userController.registerAdmin);
router.post('/admin-signin', userController.adminSignIn);
router.get('/admin/add-items', userController.adminDashboard);
router.post('/admin/add-items', userController.addItems);
router.get('/', userController.displayItems);
router.get('/product/:id', userController.displayProduct);
router.post('/cart', userController.addToCart);
router.get('/cart', userController.cart);
router.post('/cart/delete', userController.deleteItem);
router.post('/dashboard', userController.saveOrderHistory);
router.get('/dashboard', userController.getOrderHistory);
module.exports = router;