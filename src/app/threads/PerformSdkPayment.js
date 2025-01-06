const { parentPort, workerData } = require('worker_threads');
const { api } = require("../lib/api");

class PerformSdkPayment {
    async run() {
        if (parentPort) {
            const stats = await this.performTransaction(workerData);
            parentPort.postMessage({type: "result", stats});
        } else {
            console.error('This script should be run as a worker thread.');
        }
    }

    async performTransaction(args) {
        const stats = [];
        try {
            console.log("= = = = = = Concurrent user interacted with Worker-ID: "+ args.workerId + " = = = = = =");
            const sdkAuth = await api(
                'POST', 
                process.env.APP_VAULTSPAY_ACQUIRING_URL + "/merchant-auth",
                {
                    "clientId": "ID-2030758",
                    "clientSecret": "SECRET-949F07D8-A57A-444B-B36A-5A121B6F14E8"
                }
            );
            stats.push(sdkAuth.performance);
            // console.log("sdkAuth:", sdkAuth.data);
            
            const initPayment = await api(
                'POST', 
                process.env.APP_VAULTSPAY_ACQUIRING_URL + "/initialize-merchant-payment",
                {
                    "amount": 100,
                    "expiryInSeconds": 0,
                    "redirectUrl": "",
                    "callBackUrl": "",
                    "schemaCode": "SCM_02",
                    "channelName": "web",
                },
                {
                    accessToken: sdkAuth.data.access_token
                }
            );
            stats.push(initPayment.performance);
            // console.log("initPayment:", initPayment.data);


            const checkPayment = await api(
                'POST', 
                process.env.APP_VAULTSPAY_ACQUIRING_URL + "/check-payment",
                {
                    "paymentId": initPayment.data.paymentId
                },
                {
                    accessToken: sdkAuth.data.access_token
                }
            );
            stats.push(checkPayment.performance);
            // console.log("checkPayment:", checkPayment.data);

            const processPayment = await api(
                'POST', 
                process.env.APP_VAULTSPAY_ACQUIRING_URL + "/process-payment",
                {
                    "referenceId": checkPayment.data.methods[0].referenceId,
                    "name": "Nizam",
                    "email": "nizam@vautlspay.aea",
                    "phone": "11112221121",
                    "cardHolderName": "Nizam uddin",
                    "cardNumber": "4111111111111111", // 5453010000095539
                    "expMonth": "12",
                    "expYear": "25",
                    "cvc": "111"
                },
                {
                    accessToken: sdkAuth.data.access_token
                }
            );
            stats.push(processPayment.performance);
            // console.log("processPayment:", processPayment.data);

            if(processPayment.data.status == true) {
                console.log("Payment Processed Successfully: (ID: "+processPayment.data.transactionId+")");
            } else {
                console.log("Payment Processing Failed: (ID: "+processPayment.data.transactionId+")");
            }
        } catch (error) {
            console.log("Payment Processing Failed: (ID: )");
            console.log(error);
        }
        return stats;
    }

}

const sdkPayment = new PerformSdkPayment();
sdkPayment.run();
