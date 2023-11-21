const { User } = require('../models');
const auth = require('../utils/auth');

const resolvers = {
    // searchs all or single books and users
    Query: {
        me: async (parents, args, context) => {
            try {
                const data = await User.findOne({ _id: context.user._id }); 
                return data; 
            } catch {
                console.log(context);
                return await null;
            }
            
        },
    },
    // saves books
    Mutation: {
        login: async (parent, body) => {
            const user = await User.findOne({ email: body.email });
            if (!user) {
                return {message: 'Cannot find user!'};
            }

            const correctPw = await user.isCorrectPassword(body.password);

            if (!correctPw) {
                return {message: 'Wrong password!'};
            }

            const token = auth.signToken(user);
            return ( {token, user});
        },   
        addUser: async (parent, { username, email, password }) => {
           const user = await User.create({username, email, password});
           const token = auth.signToken(user);
           return ({ token, user });
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
            const removedBook = await User.findOneAndDelete(
                { _id: id },
                (err, docs) => {
                    if (err) {
                        return null;
                    }
                    return docs;
                });

            return await removedBook;
        }
    }
};

module.exports = resolvers;
