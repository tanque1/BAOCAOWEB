const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middleware/auth');

router.get('/refresh_token',userCtrl.refreshtoken)
router.post('/login',userCtrl.login);
router.get('/logout',userCtrl.logout);
router.post('/register', userCtrl.register)
router.get('/infor',auth,userCtrl.getUser)
module.exports = router;