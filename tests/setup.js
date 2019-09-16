const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
import { connectDB } from "../config/db";

console.log(db);

// Load models since we will not be instantiating our express server.
require('../models/User');


beforeEach(function(done) {
  console.log('before');
  connectDB;
  console.log('after');
});

// require('../models/Session');
// require('../models/Query');
// require('../models/ChatMessage');

// beforeEach(function(done) {
//   /*
//     Define clearDB function that will loop through all
//     the collections in our mongoose connection and drop them.
//   */
//   function clearDB() {
//     for (var i in mongoose.connection.collections) {
//       mongoose.connection.collections[i].remove(function() {});
//     }
//     return done();
//   }
//
//   /*
//     If the mongoose connection is closed,
//     start it up using the test url and database name
//     provided by the node runtime ENV
//   */
//   if (mongoose.connection.readyState === 0) {
//     mongoose.connect(
//
//       `mongodb:/mongodb+srv://isaacnpph:CSICluster666@csi-igcrg.mongodb.net/test?retryWrites=true&w=majority`, // <------- IMPORTANT
//       function(err) {
//         if (err) {
//           throw err;
//         }
//         return clearDB();
//       }
//     );
//   } else {
//     return clearDB();
//   }
// });
//
// afterEach(function(done) {
//   mongoose.disconnect();
//   return done();
// });
//
// afterAll(done => {
//   return done();
// });