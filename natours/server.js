const mongoose = require('mongoose');
const dotenv = require('dotenv');

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
app.listen(port, () => {
  console.log(`Running on port ${port}....`);
});
