const express = require('express');
const {
  signup,
  login,
  protect,
  resetPassword,
  forgotPassword,
} = require('../controllers/authController');

const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require(`../controllers/userController`);

//Routes

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.post('/forgotpassword', forgotPassword);
router.patch('/resetpassword/:token', resetPassword);

router.route('/').get(protect, getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
