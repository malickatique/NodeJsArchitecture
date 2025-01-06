const { router } = require('../framework');

const SDKPaymentTest = require('../app/controllers/SDKPaymentTest');

router.get('/', (req, res) => {
    res.send('Test Node Js Architecture!');
});

router.get('/testing', SDKPaymentTest.index);

module.exports = router;
