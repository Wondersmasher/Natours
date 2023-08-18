const express = require('express');
const {
    getAllTours,
    createTour,
    getSingleTour,
    updateSingleTour,
    deleteTour,
} = require('./../controllers/tourControllers');
const router = express.Router();

router.route('/').get(getAllTours).post(createTour);
router
  .route('/:id')
  .get(getSingleTour)
  .patch(updateSingleTour)
  .delete(deleteTour);

module.exports = router;
