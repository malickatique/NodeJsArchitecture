const { router } = require('../framework');

const UserController = require('../app/controllers/admin/UserController');

router.get('/', (req, res) => {
    return 'Test Node Js Architecture!';
});

router.get('/admin/users', UserController.index);
router.get('/admin/users/:id', UserController.get);
router.post('/admin/users', UserController.post);
router.put('/admin/users', UserController.put);
router.patch('/admin/users', UserController.patch);
router.patch('/admin/users', UserController.delete);

module.exports = router;
