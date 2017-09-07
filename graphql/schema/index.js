const {merge}                = require('lodash')
      ,userSchema             = require('./user')
      ,postSchema             = require('./post')
      ,commentSchema          = require('./comment') 
      ,{makeExecutableSchema} = require('graphql-tools')
      ,postResolvers          = require('../resolvers/post')
      ,userResolvers          = require('../resolvers/user')
      ,commentResolvers       = require('../resolvers/comment');

//merge all resolvers
//convert schema to a string
const resolvers =  merge(postResolvers, userResolvers, commentResolvers);
const typeDefs  = [commentSchema, postSchema, userSchema].toString();

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers,
    allowUndefinedInResolve:false
});
