const express = require('express');
const { signup, login, getUserDetails } = require('../controllers/authControllers');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', auth, getUserDetails);

module.exports = router;
