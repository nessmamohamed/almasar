const mongoose = require('mongoose')

const quserSchema = new mongoose.Schema({
   phone: {
       type: String,
       required: true
   },
   titles: {
       type: Array,
       required: true
   }
})


 const quserModel = mongoose.model('quser', quserSchema)

 module.exports = quserModel