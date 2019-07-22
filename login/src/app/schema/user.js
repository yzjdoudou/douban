
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username:{type:String},
  password:{type:String},
  age:{type:Number}
})

module.exports =mongoose.model('user',userSchema)
