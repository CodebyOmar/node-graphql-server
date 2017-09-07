module.exports = {
  Query: {
    posts: (obj, args, context) => {
        return context.Post.find()
        .then((posts) => posts.map((post) => post))
        .catch((error) => console.log(error.message));
    },

    post: (obj, args, context) => {
        return context.Post.findOne({ _id: args.id })
        .then(post => post ? post : null)
        .catch((error) => console.log(error.message));
    }

  },

  //retrieve a post with it's comments
  Post:{
    comments: (obj, args, context) => {
        return context.Comment.find({ post_id: obj.id })
            .then(comments => comments.map(comment => comment))
            .catch((error) => console.log(error.message));
    }   
  },

  Mutation: {
    //creating a new post
    createPost: (obj, args, context) => {
        let post = new context.Post(args);
        return post.save()
        .then((post) => {

          //find user that owns the post and store the his ID within the document
          context.User.findById({_id:post.user_id})
          .then((user) => {
              user.posts.push(post);
              user.save();
          })
          .catch((error) => console.log(error.message));  

          return post ? post : null;
        })
        .catch((error) => console.log(error.message));
    }
  }

};