const mongoose = require('mongoose');
const {MongoSchema} = require('@notores/core');
const {Schema} = mongoose;

const payment = new Schema(
    {
        mollieId: {type: String, required: true},
        invoiceNo: {type: String, required: true},
        resource: {type: String, required: true},
        mode: {type: String, required: true},
        createdDateTime: {type: Date, required: true, default: Date.now},
        status: {type: String, required: true},
        amount: {type: Number, required: true},
        description: {type: String, required: true},
        method: {type: String, required: true},
        metadata: {type: Object},
        details: {type: Schema.Types.Mixed},
        profileId: {type: String, required: true},
        links: {type: Object, required: true},
        cart: {type: Schema.Types.Mixed}
    },
    {
        minimize: false,
        strict: false
    }
);

payment.methods.isPaid = function () {
    return ['paid', 'paidout'].indexOf(this.status.toLowerCase()) > -1;
};

const Payment = new MongoSchema('Payment', payment);

module.exports = Payment;
