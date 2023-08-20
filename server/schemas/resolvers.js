const { User } = require('../models');

const resolvers = {
    // searchs all or single books and users
    Query: {
        me: async (parents, args) => {
            return User.find({$or: [{ _id: args.id }, { username: args.username }]});
        },
    },
    // saves books
    Mutation: {
    //     login: async () => {
            
    //     },
        addUser: async (parent, { username, email, password }) => {
           return await User.create({username, email, password});
        },
        // may need an update to return 
        saveBook: async (parent, { id, authors, description, bookId, image, link, title}) => {
            const body = {
                "authors": authors,
                "description": description,
                "bookId": bookId,
                "image": image,
                "link": link,
                "title": title
            }
            const updatedUser = await User.findOneAndUpdate(
                { _id: id },
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true }
              );
              return await body;
        },
        removeBook: async (parent, {id, bookId}) => {
            const removedBook = await User.findOneAndUpdate(
                { _id: id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              );

            return await removedBook;
        }
    }
};

module.exports = resolvers;
