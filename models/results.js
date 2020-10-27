const mongoose = require('mongoose')

const resultsSchema = new mongoose.Schema({
     results : {
          type: Array,
          required: true
     },
     title: {
          type: String,
          required: true
     }
})


 const resultsModel = mongoose.model('results', resultsSchema)

 module.exports = resultsModel