const mongoose = require('mongoose')

const resultsSchema = new mongoose.Schema({
     results : {
          type: Object,
          required: true
     },
     reasons: {
         type: Array,
         required: true
     },
     title: {
          type: String,
          required: true
     },
     quser:{
           type: Object,
           required: true
     },
     date: {
          type: Date,
          default: Date.now

     }
})


 const resultsModel = mongoose.model('results', resultsSchema)

 module.exports = resultsModel