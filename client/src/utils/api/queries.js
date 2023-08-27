import { gql } from '@apollo/client'

export const QUERRY_USER = gql`
query ExampleQuery($meId: String!) {
    me(id: $meId) {
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
