const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const fs = require('fs');
const port = process.env.PORT || 8000;
const DB = process.env.DATABASE_URL;
const Tour = require('./model/tourModel');

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log('connected');
  });
const importTour = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

const importData = async () => {
  try {
    console.log('ran import');

    await Tour.create(importTour);
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    console.log('ran delete');
    await Tour.deleteMany();
  } catch (error) {
    console.log(error);
  }
};

// importData();
