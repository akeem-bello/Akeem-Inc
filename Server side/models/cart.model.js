const mongoose = require('mongoose');

cartSchema = mongoose.Schema({
    itemImage: String,
    itemName: String,
    itemPrice: Number,
    itemCount: Number
});

const cartModel = mongoose.model('cart_tb', cartSchema);
module.exports = cartModel;