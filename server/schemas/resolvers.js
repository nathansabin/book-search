const { User } = require('../models');
const auth = require('../utils/auth');

const resolvers = {
    // searchs all or single books and users
    Query: {
        me: async (parents, args) => {
            return User.find({$or: [{ _id: args.id }, { username: args.username }]});
        },
    },
    // saves books
    Mutation: {
        login: async (parent, body) => {
            const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
            if (!user) {
                return {message: 'Cannot find user!'};
            }

            const correctPw = await user.isCorrectPassword(body.password);

            if (!correctPw) {
                return {message: 'Wrong password!'};
            }

            const token = auth.signToken(body);
            return ( {token, user});
        },
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
