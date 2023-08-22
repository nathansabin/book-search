const typeDefs = `
    type Book {
        authors: String!
        description: String!
        bookId: String!
        image: String!
        link: String!
        title: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me(id: String!): [User]
    }

    # TODO add data types
    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        saveBook(id: String!, authors: String!, description: String!, bookId: String!, image: String!, link: String!, title: String!): Book
        removeBook(id: String!, bookId: String!): User
        login(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;