const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const verifyToken = require('../middleware/authMiddleware');
const { validateRegister } = require('../middleware/validationMiddleware');


router.post('/register',validateRegister, UserController.register);
router.post('/login', UserController.login);


router.get('/protected', validateRegister,verifyToken, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;
