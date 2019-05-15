const {NotoresModule} = require('@notores/core');
class PaymentModule extends NotoresModule {
    
    constructor(){
        super();

        const Payment = require('./model');
        this.setModel(Payment.modelName, Payment);

        Payment.loadModel();
    }

    init(){
        require('./routes')();
    }
}

module.exports = new PaymentModule();
