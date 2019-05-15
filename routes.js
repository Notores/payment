const PaymentRouter = require('./Router');
const pack = require('./package');

module.exports = () => {

    router.get(pack.route, PaymentRouter.get);

    router.get(`${pack.route}/:id`, PaymentRouter.getById);
    router.get(`${pack.route}/:invoiceNo`, PaymentRouter.getByPaymentId);

    router.post(pack.route, PaymentRouter.post);

    router.put(`${pack.route}/:id`, PaymentRouter.put);

    router.delete(`${pack.route}/:id`, PaymentRouter.delete);

};
