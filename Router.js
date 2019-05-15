const mongoose = require('mongoose');

class PaymentRouter {

    static getModel() {
        return require('./model').model;
    }

    static getModelWrapper() {
        return require('./model');
    }

    static async get(req, res, next) {

        next('route');
    }

    static async getById(req, res, next) {

        next('route');
    }

    static async getByPaymentId(req, res, next) {


        next('route');
    }

    static async post(req, res, next) {
        // res.locals.setBody({error: 'In verband met El Mundo Fantasia op 7 en 8 juli is bestellen tijdelijk niet mogelijk.'});
        // return next();

        const Payment = PaymentRouter.getModel();
        // const Mollie = req.app.get(CONSTANTS.MOLLIE_KEY);
        // const domain = `${req.app.get(CONSTANTS.SSL) ? 'https' : 'http'}://${req.app.get(CONSTANTS.DOMAIN)}`;
        const Invoice = mongoose.model('Order');

        let invoiceNo;

        if (req.ncmse.invoiceNo)
            invoiceNo = req.ncmse.invoiceNo;
        else
            invoiceNo = Invoice.createinvoiceNo();

        const redirectUrl = `${domain}/payment/${invoiceNo}`;

        const molliePayment = await Mollie.payments.create(
            res.locals.cart.totalPrice,
            `WizardingShop order ${invoiceNo}`,
            redirectUrl,
            {method: res.locals.cart.paymentMethod.method}
        );

        console.log('molliePayment', molliePayment);

        molliePayment.mollieId = molliePayment.id;

        delete molliePayment.id;

        const newPayment = new Payment({...molliePayment, invoiceNo: invoiceNo});

        newPayment.cart = res.locals.cart.toObject();

        await newPayment.save();

        res.locals.setBody({payment: newPayment});

        next();
    }

    static async delete(req, res, next) {
        next('route');
    }
}

module.exports = PaymentRouter;
