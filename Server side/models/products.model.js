const mongoose = require('mongoose');

productSchema = mongoose.Schema({
    productImage: String,
    productName: String,
    productPrice: Number,
    productRating: Number,
    productReviews: Number,
    productCount: Number
})

const productsModel = mongoose.model('products_tb', productSchema);
module.exports = productsModel;