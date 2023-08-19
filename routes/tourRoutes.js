const express = require('express');
const {
  getAllTours,
  createTour,
  getSingleTour,
  updateSingleTour,
  deleteTour,
  checkID,
  checkResponseBody,
} = require('./../controllers/tourControllers');
const router = express.Router();

router.param('id', checkID);
router.route('/').get(getAllTours).post(checkResponseBody, createTour);
router
  .route('/:id')
  .get(getSingleTour)
  .patch(updateSingleTour)
  .delete(deleteTour);

module.exports = router;
