/*jshint esversion: 6 */
/*jshint esversion: 8 */
const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectToDb;
