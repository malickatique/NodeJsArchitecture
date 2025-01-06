const path = require('path');
const fs = require('fs');

class EndpointsReport {
    constructor() {}

    report(args) {
        const reportFilePath = path.resolve(process.cwd(), 'src/app/reports/', args.file);

        const endpointStats = {};
        let totalResponseTime = 0;
        let totalHttp200s = 0;
        let totalHttp400s = 0;
        let totalHttp401s = 0;
        let totalHttp500s = 0;
        let totalHttp408s = 0;
        let totalHttp504s = 0;
        let totalHttpXXXs = 0;
        let totalEntries = 0;

        // Calculate statistics for each endpoint
        args.data.forEach(entry => {
            const { endpoint, responseTime, statusCode } = entry;

            if (!endpointStats[endpoint]) {
                endpointStats[endpoint] = {
                    totalResponseTime: 0,
                    count: 0,
                    http200s: 0,
                    http400s: 0,
                    http401s: 0,
                    http500s: 0,
                    http408s: 0,
                    http504s: 0,
                    httpXXXs: 0
                };
            }

            const stats = endpointStats[endpoint];
            stats.totalResponseTime += responseTime;
            stats.count += 1;

            switch (statusCode) {
                case 200:
                    stats.http200s += 1;
                    break;
                case 400:
                    stats.http400s += 1;
                    break;
                case 401:
                    stats.http401s += 1;
                    break;
                case 500:
                    stats.http500s += 1;
                    break;
                case 408:
                    stats.http408s += 1;
                    break;
                case 504:
                    stats.http504s += 1;
                    break;
                default:
                    stats.httpXXXs += 1;
                    break;
            }

            totalResponseTime += responseTime;
            totalEntries += 1;

            if (statusCode === 200) totalHttp200s += 1;
            if (statusCode === 400) totalHttp400s += 1;
            if (statusCode === 401) totalHttp401s += 1;
            if (statusCode === 500) totalHttp500s += 1;
            if (statusCode === 408) totalHttp408s += 1;
            if (statusCode === 504) totalHttp504s += 1;
            else totalHttpXXXs += 1;
        });

        // Calculate averages for each endpoint
        const endpointResults = Object.keys(endpointStats).map(endpoint => {
            const stats = endpointStats[endpoint];
            return {
                endpoint,
                averageResponseTime: stats.totalResponseTime / stats.count,
                countHttp200s: stats.http200s,
                countHttp400s: stats.http400s,
                countHttp401s: stats.http401s,
                countHttp500s: stats.http500s,
                countHttp408s: stats.http408s,
                countHttp504s: stats.http504s,
                countHttpXXXs: stats.httpXXXs
            };
        });

        // Calculate global averages
        const globalAverages = {
            totalApiCalls: totalEntries,
            averageResponseTime: totalResponseTime / totalEntries,
            countHttp200s: totalHttp200s,
            countHttp400s: totalHttp400s,
            countHttp401s: totalHttp401s,
            countHttp500s: totalHttp500s,
            countHttp408s: totalHttp408s,
            countHttp504s: totalHttp504s,
            countHttpXXXs: totalHttpXXXs
        };

        fs.writeFileSync(reportFilePath, JSON.stringify({ endpointResults, globalAverages }, null, 2), 'utf-8');
        console.log("Endpoints Results: ", endpointResults);
        console.log("Global Averages:", globalAverages);
        return {
            endpointResults,
            globalAverages
        };
    }
}

module.exports = new EndpointsReport();