import { gql } from '@apollo/client'

export const LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            password
            savedBooks {
            authors
            description
            bookId
            image
            link
            title
            }
        }
        }
    }
`;

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation SaveBook($saveBookId: String!, $description: String!, $bookId: String!, $image: String!, $title: String!, $authors: [String!], $link: String) {
    saveBook(id: $saveBookId, description: $description, bookId: $bookId, image: $image, title: $title, authors: $authors, link: $link) {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($removeBookId: String!, $bookId: String!) {
    removeBook(id: $removeBookId, bookId: $bookId) {
      _id
      username
      email
      password
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;