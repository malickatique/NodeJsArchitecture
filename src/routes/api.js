const { router } = require('../framework');

const IssuingTransactionTest = require('../app/tests/IssuingTransactionTest');

router.get('/', (req, res) => {
    res.send('Test Node Js Architecture!');
});

router.get('/transactions', IssuingTransactionTest.index);

module.exports = router;
