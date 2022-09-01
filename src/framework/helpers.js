const path = require('path');

const callRepository = async (repository, method, args) => {
    const repositoryPath = path.resolve(process.cwd(), 'src/app/repositories/', repository);
    const Repository = require(repositoryPath);
    return await Repository[method](args);
};

const send = (res, data) => {
    return res
        .set({ 'Content-Type': 'application/json' })
        .status(200)
        .json({ ...data, data: data.data ?? {}, status: data.status ?? 200, message: data.message ?? 'Success' });
};

module.exports = {
    callRepository,
    send,
};
