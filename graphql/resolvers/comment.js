module.exports = {
  Query: {
    comments: (obj, args, context) => {
        return context.Comment.find()
        .then((comments) => comments.map((comment) => comment))
        .catch((error) => console.log(error.message));
    },

    comment: (obj, args, context) => {
        return context.Comment.findOne({ _id: args.id })
        .then(comment => comment ? comment : null)
        .catch((error) => console.log(error.message));
    }

  },

  Mutation: {
    //creating a new post
    createComment: (obj, args, context) => {
        let comment = new context.Comment(args);
        return comment.save()
        .then((comment) => {

          //find post that owns the comment and store the his ID within the document
          context.Post.findById({_id:comment.post_id})
          .then((post) => {
              post.comments.push(comment);
              post.save();
          })
          .catch((error) => console.log(error.message)); 

          return comment ? comment : null;
        })
        .catch((error) => error.message );
    }
  }

};