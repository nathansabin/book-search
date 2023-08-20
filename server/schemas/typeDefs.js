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

    type Query {
        me(id: String!): [User]
    }

    # TODO add data types
    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        saveBook(id: String!, authors: String!, description: String!, bookId: String!, image: String!, link: String!, title: String!): Book
        removeBook(id: String!, bookId: String!): Book
        # login(): User
        # removeBook(): Book
    }
`;

module.exports = typeDefs;