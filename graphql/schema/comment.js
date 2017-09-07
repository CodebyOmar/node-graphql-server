
// Define your types here.
const commentSchema = `
    type Comment {
        id: ID!
        content: String!
        post_id: String!
        email: String!
    }

    type Query {
        # Retrieves every comment
        comments: [Comment!]!
        # Retrieves a single comment by ID
        comment(id: ID!): Comment
    }

    type Mutation { 
       # create a post (requires a user ID)
       createComment(
         email: String!,
         content: String!,
         post_id: String!
       ): Comment
    }

    
`;

// export the schema object.
module.exports = commentSchema;