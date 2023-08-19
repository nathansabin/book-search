const { User, Book } = require('../models');

const resolvers = {
    // searchs all or single books and users
    Query: {
        user: async (parents, args) => {
            return await user.findById(args.id);
        },
        books: async (parents, args) => {
            return await user.findOne({});
        },
    },
    // saves books
    Mutation: {
        login: async () => {
            
        },
        addUser: async () => {

        },
        saveBook: async () => {

        },
        removeBook: async () => {

        }
    }
};

module.exports = resolvers;
