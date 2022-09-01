const User = require('./index');

class Seeder {
    static async run() {
        const users = await User.find({}).exec();

        if (users.length === 0) {
            await Charge.insertMany([
                {
                    name: 'Malik Atique',
                    email: 'malickateeq@gmail.com',
                    phone: '+92 330 5959 199',
                    status: 1,
                },
                {
                    title: 'Super Admin',
                    email: 'admin@test.com',
                    phone: '0000000000000',
                    status: 1,
                },
            ]);
        }
    }
}

module.exports = Seeder;
