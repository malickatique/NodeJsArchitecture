const { Worker } = require('worker_threads');
const path = require('path');
const fs = require('fs');
const { Repository } = require('../../framework');

/**
 * Global Variables
 */
const statistics = [];

class Threads extends Repository {
    constructor() {
        super();
    }

    async start(args) {
        const workerPromises = [];
        const stasticsFilePath = path.resolve(process.cwd(), 'src/app/reports/', args.dataFile);
        args.workerPath = path.resolve(process.cwd(), args.workerPath);

        for (let i = 0; i < args.THREADS; i++) { // Changed from `i <= args.THREADS` to `i < args.THREADS`
            args.workerId = i;
            args.workerData.workerId = i;

            const worker = this.createWorker(args);

            worker.on('message', (message) => this.onWorkerMessage(message));
            worker.on('error', (error) => this.onWorkerError(error));
            worker.on('exit', (code) => this.onWorkerExit(code));

            workerPromises.push(new Promise((resolve, reject) => {
                worker.on('exit', (code) => {
                    if (code === 0) {
                        resolve();
                    } else {
                        reject(new Error(`Worker stopped with exit code ${code}`));
                    }
                });
            }));
        }

        // Await all worker promises to resolve
        await Promise.all(workerPromises);
        fs.writeFileSync(stasticsFilePath, JSON.stringify(statistics, null, 2), 'utf-8');
        EndpointsReport.report({data: statistics, file: args.reportFile});
    }

    createWorker(args) {
        return new Worker(args.workerPath, { workerData: args.workerData });
    }

    onWorkerMessage(message) {
        if (message.type === 'result') {
            statistics.push(...message.stats);
        }
    }

    onWorkerError(error) {
        console.error('Worker error:', error);
    }

    onWorkerExit(code) {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
        }
    }
}

module.exports = new Threads();