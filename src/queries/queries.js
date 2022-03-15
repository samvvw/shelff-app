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

export const GET_CATEGORIES = gql`
    query Categories {
        categories {
            categoryId
            categoryName
        }
    }
`

export const GET_LOCATIONS = gql`
    query Locations {
        locations {
            locationId
            locationName
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

export const FIND_ITEM = gql`
    query FindItem($itemId: String!) {
        findItem(itemId: $itemId) {
            itemId
            itemName
            creationDate
            categoryName
        }
    }
`

export const ADD_ITEM = gql`
    mutation AddItem($itemId: String, $itemName: String, $categoryId: Int) {
        addItem(itemId: $itemId, itemName: $itemName, categoryId: $categoryId) {
            itemId
            itemName
            creationDate
            categoryName
        }
    }
`

export const UPDATE_ITEM = gql`
    mutation Mutation($itemId: String, $itemName: String, $categoryId: Int) {
        updateItem(
            itemId: $itemId
            itemName: $itemName
            categoryId: $categoryId
        ) {
            itemId
            itemName
            categoryName
        }
    }
`
