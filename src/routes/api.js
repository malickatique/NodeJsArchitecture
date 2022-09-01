const { router } = require('../framework');

const UserController = require('../app/controllers/user/UserController');

router.get('/', (req, res) => {
    return 'Test Node Js Architecture!';
});

router.get('/user/users', UserController.index);
router.get('/user/users/:id', UserController.get);
router.post('/user/users', UserController.post);
router.put('/user/users', UserController.put);
router.patch('/user/users', UserController.patch);
router.patch('/user/users', UserController.delete);

module.exports = router;
