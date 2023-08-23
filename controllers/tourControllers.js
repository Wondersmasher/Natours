const Tour = require('../model/tourModel');

// Get all the tours
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      data: { tours },
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: `Error :${error}`,
    });
  }
};

// Create a new Tour
exports.createTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { tour },
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: `Error :${error}`,
    });
  }
};
exports.getSingleTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: `Error: ${error}`,
    });
  }
};

exports.updateSingleTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      message: 'Updated',
      data: { tour },
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: `Error: ${error}`,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: `Error: ${error}`,
    });
  }
  // try {

  // } catch (error) {
  //   res.status(400).json({
  //     status:'failed'
  //   })
  // }
  // res.status(204).json({
  //   status: 'success',
  //   data: null,
  // });
};

// MiddleWares
// exports.checkID = (req, res, next, val) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Could not find the ID',
//     });
//   }
//   next();
// };

// exports.checkResponseBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price',
//     });
//   }
//   next();
// };
