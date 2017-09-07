const mongoose = require('mongoose')
      ,Schema = mongoose.Schema;

let userSchema = new Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    posts:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }]
});

module.exports = mongoose.model('User', userSchema);