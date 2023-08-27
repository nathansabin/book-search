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
    mutation Mutation($saveBookId: String!, $authors: String!, $description: String!, $bookId: String!, $image: String!, $link: String!, $title: String!) {
        saveBook(id: $saveBookId, authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
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