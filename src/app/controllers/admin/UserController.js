const { callRepository, send } = require('../../../framework');

const controller = {
    repoPath: 'admin/UserRepository',
    index: async (req, res) => send(res, await callRepository(controller.repoPath, 'index', req.args)),
    get: async (req, res) => send(res, await callRepository(controller.repoPath, 'get', req.args)),
    post: async (req, res) => send(res, await callRepository(controller.repoPath, 'post', req.args)),
    put: async (req, res) => send(res, await callRepository(controller.repoPath, 'put', req.args)),
    patch: async (req, res) => send(res, await callRepository(controller.repoPath, 'patch', req.args)),
    delete: async (req, res) => send(res, await callRepository(controller.repoPath, 'delete', req.args)),
};

module.exports = controller;
