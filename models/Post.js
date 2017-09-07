const mongoose = require('mongoose')
      ,Schema = mongoose.Schema;

let postSchema = new Schema({
    title:{type:String, required:true},
    content:{type:String, required:true},
    comments:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }],
    user_id:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: "User"
    }]
});

module.exports = mongoose.model('Post', postSchema);