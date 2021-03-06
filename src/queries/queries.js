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
            categoryName
            categoryId
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
export const GET_USER_ITEMS = gql`
    query UserItems($userId: String) {
        userItems(userId: $userId) {
            itemId
            itemName
            categoryName
            userId
            creationDate
            expirationDate
            quantity
            locationName
            isEssential
            locationId
            shelfName
            shelfId
        }
    }
`

export const ADD_USER_ITEM = gql`
    mutation AddUserItem(
        $itemId: String
        $userId: String
        $quantity: Int
        $expirationDate: String
        $locationId: Int
        $shelfId: Int
        $isEssential: Boolean
    ) {
        addUserItem(
            itemId: $itemId
            userId: $userId
            quantity: $quantity
            expirationDate: $expirationDate
            locationId: $locationId
            shelfId: $shelfId
            isEssential: $isEssential
        ) {
            itemId
            itemName
            userId
            creationDate
            expirationDate
            quantity
            locationName
            shelfName
            isEssential
        }
    }
`

export const ADD_USER_ITEM_LIST = gql`
    mutation Mutation($itemList: [UserItemArgs!]!) {
        addUserItemList(itemList: $itemList) {
            itemId
            userId
            expirationDate
            quantity
            locationName
            shelfName
            isEssential
        }
    }
`

export const UPDATE_USER_ITEM = gql`
    mutation UpdateUserItem(
        $itemId: String
        $userId: String
        $creationDate: String
        $quantity: Int
        $expirationDate: String
        $shelfId: Int
        $locationId: Int
        $isEssential: Boolean
    ) {
        updateUserItem(
            itemId: $itemId
            userId: $userId
            creationDate: $creationDate
            quantity: $quantity
            expirationDate: $expirationDate
            shelfId: $shelfId
            locationId: $locationId
            isEssential: $isEssential
        ) {
            itemId
            userId
            creationDate
            expirationDate
            quantity
            locationName
            shelfName
            isEssential
        }
    }
`

export const REMOVE_USER_ITEM = gql`
    mutation DeleteUserItem(
        $itemId: String
        $userId: String
        $creationDate: String
    ) {
        deleteUserItem(
            itemId: $itemId
            userId: $userId
            creationDate: $creationDate
        )
    }
`

export const REMOVE_ESSENTIAL_ITEM = gql`
    mutation RemoveEssentialItem($itemId: String, $userId: String) {
        removeEssentialItem(itemId: $itemId, userId: $userId) {
            itemId
            itemName
            categoryName
            categoryId
        }
    }
`
