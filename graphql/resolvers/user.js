module.exports = {
  /**
   * Queries
   */  
  Query: {
    users: (obj, args, context) => {
        return context.User.find()
        .then((users) => users.map((user) => user))
        .catch((error) => error.message);
    },

    user: (obj, args, context) => {
        return context.User.findOne({ _id: args.id })
        .then(user => user ? user : null)
        .catch((error) => error.message);
    }
  },

  //retrieve a user with it's posts
  User:{
    posts: (obj, args, context) => {
        return context.Post.find({ user_id: obj.id })
            .then(posts => posts.map(post => post))
            .catch((error) => console.log(error.message));
    }   
  },

  /**
   * Mutations createUser
   */
  Mutation: {
    createUser: (obj, args, context) => {
        let user = new context.User(args);
        return user.save()
        .then((user) => user)
        .catch((error) => console.log(error.message));
    }
  }

};