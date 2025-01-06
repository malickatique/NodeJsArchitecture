const axios = require('axios');

/**
 * A helper function to make API calls using Axios.
 * @param {string} method - HTTP method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {string} url - The URL to make the request to.
 * @param {object} [data] - The data to send with the request (for POST, PUT, PATCH).
 * @param {object} [headers] - Optional headers to include in the request.
 * @returns {Promise<object>} - A promise that resolves to the response data.
 */
const api = async (method, url, data = {}, headers = {}) => {
    console.log("Calling API @ "+url);
    const startTime = Date.now();
    try {
        const response = await axios({
            method,
            url,
            data,
            headers
        });
        const responseTime = Date.now() - startTime;
        return response.data.data;
    } catch (error) {
        // Handle error (logging, rethrow, etc.)
        // console.error(`Error making API call to ${url}:`, error.response ? error.response.data : error.message);
        const responseTime = Date.now() - startTime;
        return error.response.data;
    }
};

module.exports = {
    api
};