const req = require('express/lib/request');
const { ApiError, Repository } = require('../../../framework');
const User = require('../../models/User');

class UserRepository extends Repository {
    constructor() {
        super();
    }

    async index(args) {
        const users = await User.find({});
        return { data: { users } };
    }

    async get(args) {
        const user = await User.findOne({ _id: args.params.id });
        return { data: { user } };
    }

    async post(args) {
        const user = await User.find({
            name: args.body.name,
            email: args.body.email,
            phone: args.body.phone,
            status: args.body.status,
        });
        return { data: { user } };
    }

    async put(args) {
        const user = await User.findOne({ _id: args.body.id });
        user.name = args.body.name;
        user.email = args.body.email;
        user.phone = args.body.phone;
        user.status = args.body.status;
        await user.save();

        return { data: { user } };
    }

    async patch(args) {
        const user = await User.findOne({ _id: args.body.id });
        user.name = args.body.name ?? user.name;
        user.email = args.body.email ?? user.email;
        user.phone = args.body.phone ?? user.phone;
        user.status = args.body.status ?? user.status;
        await user.save();

        return { data: { user } };
    }

    async delete(args) {
        const user = await User.findOne({
            _id: args.body._id,
        }).exec();

        await user.delete();
        return { message: 'User deleted successfully!' };
    }
}

module.exports = new UserRepository();
