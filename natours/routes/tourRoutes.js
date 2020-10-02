const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');

const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthyPlan,
} = require(`${__dirname}/../controllers/tourController`);

//Routes
const router = express.Router();

// router.param('id', checkID);
router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthyPlan);
router.route('/top-5cheap').get(aliasTopTours, getAllTours);
router.route('/').get(getAllTours).post(createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
