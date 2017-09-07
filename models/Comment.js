const mongoose = require('mongoose')
      ,Schema = mongoose.Schema;

const commentSchema = new Schema({
    content:{type:String, required:true},
    email:{type:String, required:true},
    post_id:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }]
});

module.exports = mongoose.model("Comment", commentSchema);