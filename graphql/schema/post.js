
// Define your types here.
const postSchema = `
    type Post {
        id: ID!
        title: String!
        content: String!
        user_id: String!
        comments: [Comment!]!
    }

    extend type Query {
        # Retrieves every post
        posts: [Post!]!
        # Retrieves user's post by ID
        post(id:String!): [Post]
    }

    extend type Mutation { 
       # create a post (requires a user ID)
       createPost(
         title: String!,
         content: String!,
         user_id: String!
       ): Post
    }

    
`;

// export the schema object.
module.exports = postSchema;