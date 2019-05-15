const PaymentRouter = require('./Router');
const {routeWithHandle, checkEmptyParams, checkParamIsObjectId} = require('@notores/core');

module.exports = () => {

    routeWithHandle(
        'notores-payment',
        '/payment',
        [
            PaymentRouter.get,
        ],
        {
            accepts: ['html', 'json'],
        },
    );

    routeWithHandle(
        'notores-payment-single-id',
        '/payment/:id',
        [
            checkParamIsObjectId,
            PaymentRouter.getById,
        ],
        {
            accepts: ['html', 'json'],
        },
    );

    routeWithHandle(
        'notores-payment-single-invoiceno',
        '/payment/:invoiceNo',
        [
            checkEmptyParams,
            PaymentRouter.getByPaymentId,
        ],
        {
            accepts: ['html', 'json'],
        },
    );

    routeWithHandle(
        'notores-payment-create',
        '/payment',
        [
            PaymentRouter.get,
        ],
        {
            accepts: ['html', 'json'],
            method: 'post',
            admin: true
        },
    );

    routeWithHandle(
        'notores-payment-update',
        '/payment/:id',
        [
            checkParamIsObjectId,
            PaymentRouter.post,
        ],
        {
            accepts: ['html', 'json'],
            method: 'put',
            admin: true
        },
    );

    routeWithHandle(
        'notores-payment-delete',
        '/payment/:id',
        [
            checkParamIsObjectId,
            PaymentRouter.delete,
        ],
        {
            accepts: ['html', 'json'],
            method: 'delete',
            admin: true
        },
    );
};
