const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNHANDLED EXCEPTION shutting down.......');
  console.log(err.name, err.message);

  process.exit(1);
});

//environment variable setup
dotenv.config({ path: './config.env' });
console.log(process.env.NODE_ENV);

//Import app
const app = require('./app');

//Database connection
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Conntection succesful'));

//Server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Running on port ${port}....`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION shutting down.......');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
