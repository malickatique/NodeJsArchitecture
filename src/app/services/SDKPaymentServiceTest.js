const { Repository } = require('../../framework');
const threads = require("../threads");

class SDKPaymentServiceTest extends Repository {
    constructor() {
        super();
    }

    async index(args) {
        const load = {
            THREADS: 100,
            workerData: {},
            dataFile: "data.json",
            reportFile: "stastics.json",
            workerPath: "src/app/workers/PerformSdkPayment"
        };
        threads.start(load);
        return { data: {load} };
    }
}

module.exports = new SDKPaymentServiceTest();
