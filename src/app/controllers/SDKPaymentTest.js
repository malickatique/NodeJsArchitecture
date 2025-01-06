const { callService, send } = require('../../framework');

const controller = {
    repoPath: 'SDKPaymentServiceTest',
    index: async (req, res) => send(res, await callService(controller.repoPath, 'index', req.args)),
    get: async (req, res) => send(res, await callService(controller.repoPath, 'get', req.args)),
};

module.exports = controller;
