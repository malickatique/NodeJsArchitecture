const { Repository } = require('../../framework');
const { api } = require("../lib/api");
const { v4: uuidv4 } = require('uuid');
const transactions = require("../data/transactions.json");
const presentments = require("../data/presentments.json");

class IssuingTransactionTest extends Repository {
    constructor() {
        super();
    }

    async index(req, res) {
        const BASE_URL = process.env.APP_VAULTSPAY_URL;
        const PVT_GW = process.env.APP_VAULTSPAY_PRIVATE_GW_URL;

        // const adminUser = {
        //     verificationType: "EMAIL",
        //     validFor: "LOGIN",
        //     email: "super.admin@vaultspay.ae",
        //     otp: "111111",
        //     accessToken: null,
        //     password: "11111111"
        // };
        
        // const sendOtpResp = await api('POST', BASE_URL + "/as/api/v1/send-otp", {
        //     "verificationType": "EMAIL",
        //     "validFor": "LOGIN",
        //     "email": adminUser.email
        // });
        // // console.log(sendOtpResp);
        
        // const loginResp = await api('POST', BASE_URL + "/as/api/v1/login", {
        //     "verificationType": "EMAIL",
        //     "email": adminUser.email,
        //     // "otp": "111111",
        //     "password": "11111111"
        // });
        // adminUser.accessToken = loginResp.accessToken;
        // // console.log(loginResp);
        
        // TODO: Shift this API call to TCS
        // let depositTransactionId = uuidv4();
        // const depositReqResp = await api('POST', BASE_URL + "/be/api/v1/deposit-requests", {
        //     "transactionId" : depositTransactionId,
        //     "receiverUserId": 4,
        //     "receiverAccountId": 11,
        //     "thirdPartyConfigSlug" : "system-deposit",
        //     "currencyCode": "AED",
        //     "amount": 50000
        // }, { Authorization: `Bearer ${adminUser.accessToken}` });
        // // console.log(depositReqResp);
        
        // const processDepositResp = await api('POST', BASE_URL + "/be/api/v1/deposit-request-process", {
        //     "transactionId": depositTransactionId
        // }, { Authorization: `Bearer ${adminUser.accessToken}` });
        // console.log(processDepositResp);

        // let transferTransactionId = uuidv4();
        // const transferResp = await api('POST', BASE_URL + "/be/api/v1/initiate-transfer", {
        //     "transactionId" : transferTransactionId,
        //     "senderAccountId": 11,
        //     "receiverAccountId": 10,
        //     "thirdPartyConfigSlug" : "system-transfer",
        //     "currencyCode": "AED",
        //     "amount": 50000
        // }, { Authorization: `Bearer ${adminUser.accessToken}` });
        // console.log(transferResp);

        const cardToken = "263676319";

        // Authorizations
        for (const [index, transaction] of transactions.entries()) {
            transaction.ISO_MSG.DE2 = cardToken;
            console.log("Executing Transaction No." + index);
            try {
                const tranx = await api('POST', PVT_GW + "/tc/api/v1/pmt-fast-auth", JSON.stringify(transaction), {'Content-Type': 'application/json'});
                console.log("Transaction Executed!");
            } catch (error) {
                console.error("Error executing transaction:", error);
            }
        }

        // Settlements
        for (const [index, presentment] of presentments.entries()) {
            presentment.ISO_MSG["2"] = cardToken;
            console.log("Executing Presentment Batch No." + index);
            try {
                const tranx = await api('POST', PVT_GW + "/tc/api/v1/pmt-fast-settlement", JSON.stringify([presentment]), {'Content-Type': 'application/json'});
                console.log("Presentments Executed!");
            } catch (error) {
                console.error("Error executing presentment:", error);
            }
        }

        // // Async Version
        // transactions.forEach(async (transaction, index) => {});

        res.send({});
    }
}

module.exports = new IssuingTransactionTest();
