const mongoose = require('mongoose');

orderHistorySchema = mongoose.Schema(
    {
        shippingName: String,
        shippingTelNumber: Number,
        shippingAddress: String,
        orderTotal: Number
    },
    {
        timestamps: true
    }
);

const orderHistoryModel = mongoose.model('orderHistory_tb', orderHistorySchema);
module.exports = orderHistoryModel;