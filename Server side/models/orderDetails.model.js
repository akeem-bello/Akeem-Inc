const mongoose = require('mongoose');

orderDetailsSchema = mongoose.Schema(
   { 
    productsTotal: Number,
    orderTax: Number,
    orderShipping: Number,
    orderTotal: Number
}
);

const orderDetailsModel = mongoose.model('order_tb', orderDetailsSchema);
module.exports = orderDetailsModel;