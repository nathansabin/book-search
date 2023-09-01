import { gql } from '@apollo/client'

export const QUERRY_USER = gql`
query Query {
  me {
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
`
