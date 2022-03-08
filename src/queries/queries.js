import { gql } from '@apollo/client'

export const ADD_USER = gql`
  mutation AddUser($userId: String, $email: String, $fullName: String) {
    addUser(userId: $userId, email: $email, fullName: $fullName) {
      userId
      email
      fullName
      creationDate
    }
  }
`

export const GET_ESSENTIALS = gql`
  query Essentials($userId: String) {
    essentials(userId: $userId) {
      itemId
      itemName
      creationDate
    }
  }
`
