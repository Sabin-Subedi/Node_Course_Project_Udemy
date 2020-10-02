const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

// Route Handlers
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  //Send response
  res.status(200).json({
    status: 'succes',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Page Under Construction',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Page Under Construction',
  });
};
exports.updateUser = (req, res) =>
  res.status(500).json({
    status: 'error',
    message: 'Page Under Construction',
  });
{
}
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Page Under Construction',
  });
};
