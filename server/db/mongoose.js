const mongoose = require("mongoose");
require('dotenv').config({path: '../.env'})

const connectionString = "mongodb+srv://dlsdud1714:in2005125mb@localbusiness.ponup.mongodb.net/localBusiness?retryWrites=true&w=majority"
// process.env.MONGODB_URI;
// "mongodb://localhost:27017" 
//

mongoose.connect(connectionString, () => {
  console.log(`connected to mongoose on ${connectionString}`);
});

module.exports = mongoose;