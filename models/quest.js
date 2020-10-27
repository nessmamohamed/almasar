const mongoose = require('mongoose')

const questSchema = new mongoose.Schema({
     questions : {
          type: Array,
          required: true
     },
     title: {
          type: String,
          required: true
     },
     title_ar: {
          type: String,
          required: true
     }
})


 const questModel = mongoose.model('quest', questSchema)

 module.exports = questModel