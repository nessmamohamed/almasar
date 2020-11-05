const mongoose = require('mongoose')

const visitorsSchema = new mongoose.Schema({
     ip : {
          type: String,
          required: true
     }
})


 const visitorsModel = mongoose.model('visitors', visitorsSchema)

 module.exports = visitorsModel