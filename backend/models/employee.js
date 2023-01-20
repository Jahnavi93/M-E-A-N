const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Employee = new Schema({
   fname: {
      type: String
   },
   lname: {
    type: String
    },
   email: {
      type: String
   },
   phoneNumber: {
      type: Number
   },
   
}, {
   collection: 'employees'
})
module.exports = mongoose.model('Employee', Employee)