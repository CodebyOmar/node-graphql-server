
// Define your types here.
const userSchema = `
    type User {
        id: ID!
        firstname: String!
        lastname: String!
        posts: [Post!]!
    }

    extend type Query {
        # Retrieves every user
        users: [User!]!
        # Retrieves a single user by ID
        user(id: ID!): User
    }

    extend type Mutation {
       # Creates a new user
       createUser(
         firstname: String!, 
         lastname: String! 
       ): User
    }

    
`;

// export the schema object.
module.exports = userSchema;