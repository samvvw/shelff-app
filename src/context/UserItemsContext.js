import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { createContext, useReducer, useEffect } from 'react'
import {
    ADD_USER_ITEM,
    ADD_USER_ITEM_LIST,
    GET_ESSENTIALS,
    GET_USER_ITEMS,
    REMOVE_USER_ITEM,
    UPDATE_USER_ITEM,
} from '../queries/queries'
import { UserItemsReducer } from './UserItemsReducer'

const initialState = {
    loading: false,
    error: null,
    userItems: null,
    essentials: null,
}

export const UserItemsContext = createContext(initialState)

export const UserItemsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserItemsReducer, initialState)

    // Get User Items
    const [getUserItemsRequest, getUserItemsResult] =
        useLazyQuery(GET_USER_ITEMS)

    const getUserItems = (userId) => {
        getUserItemsRequest({ variables: { userId } })
    }

    useEffect(() => {
        if (getUserItemsResult.loading) {
            dispatch({ type: 'LOADING_TRUE' })
        }
        if (getUserItemsResult.error) {
            dispatch({ type: 'ERROR', payload: getUserItemsResult.error })
        }
        if (getUserItemsResult.data) {
            dispatch({
                type: 'GET_USER_ITEMS',
                payload: getUserItemsResult.data,
            })
            dispatch({ type: 'LOADING_FALSE' })
        }
    }, [getUserItemsResult])

    // Add User Item
    const [addUserItemRequest] = useMutation(ADD_USER_ITEM)

    const addUserItem = (
        itemId,
        userId,
        quantity,
        expirationDate,
        locationId,
        isEssential,
        shelfId = '1',
    ) => {
        addUserItemRequest({
            variables: {
                itemId,
                userId,
                quantity,
                expirationDate,
                locationId,
                shelfId,
                isEssential,
            },
            refetchQueries: [
                { query: GET_USER_ITEMS, variables: { userId } },
                { query: GET_ESSENTIALS, variables: { userId } },
            ],
        })
    }

    // Add User Item List

    const [addUserItemListRequest] = useMutation(ADD_USER_ITEM_LIST)

    const addUserItemList = async (itemList) => {
        await addUserItemListRequest({
            variables: {
                itemList,
            },
            refetchQueries: [
                {
                    query: GET_USER_ITEMS,
                    variables: { userId: itemList[0].userId },
                },
                {
                    query: GET_ESSENTIALS,
                    variables: { userId: itemList[0].userId },
                },
            ],
        })
    }

    // Remove userItem
    const [removeUserItemRequest] = useMutation(REMOVE_USER_ITEM)

    const removeUserItem = (itemId, userId, creationDate) => {
        const formattedCreationDate = new Date(+creationDate)
            .toLocaleString(undefined, {
                dateStyle: 'short',
                hour12: false,
                timeStyle: 'medium',
            })
            .replace(/\//g, '-')
            .replace(',', '')
        removeUserItemRequest({
            variables: {
                itemId,
                userId,
                creationDate: formattedCreationDate,
            },
            refetchQueries: [{ query: GET_USER_ITEMS, variables: { userId } }],
        })
    }

    // Update User Item
    const [updateUserItemRequest] = useMutation(UPDATE_USER_ITEM)

    const updateUserItem = (
        itemId,
        userId,
        creationDate,
        quantity,
        expirationDate,
        shelfId,
        locationId,
        isEssential,
    ) => {
        const formattedCreationDate = new Date(+creationDate)
            .toLocaleString(undefined, {
                dateStyle: 'short',
                hour12: false,
                timeStyle: 'medium',
            })
            .replace(/\//g, '-')
            .replace(',', '')

        const formattedExpirationDate = new Date(+expirationDate)
            .toLocaleString(undefined, {
                dateStyle: 'short',
                hour12: false,
                timeStyle: 'medium',
            })
            .replace(/\//g, '-')
            .split(',')[0]
        updateUserItemRequest({
            variables: {
                itemId,
                userId,
                creationDate: formattedCreationDate,
                quantity,
                expirationDate: formattedExpirationDate,
                shelfId,
                locationId,
                isEssential,
            },
            refetchQueries: [{ query: GET_USER_ITEMS, variables: { userId } }],
        })
    }

    // Get Essentials
    const [getEssentialsRequest, getEssentialsResult] =
        useLazyQuery(GET_ESSENTIALS)

    const getEssentials = (userId) => {
        getEssentialsRequest({ variables: { userId } })
    }

    useEffect(() => {
        if (getEssentialsResult.loading) {
            dispatch({ type: 'LOADING_TRUE' })
        }
        if (getEssentialsResult.error) {
            dispatch({ type: 'ERROR', payload: getEssentialsResult.error })
        }
        if (getEssentialsResult.data) {
            dispatch({
                type: 'GET_ESSENTIALS',
                payload: getEssentialsResult.data,
            })
            dispatch({ type: 'LOADING_FALSE' })
        }
    }, [getEssentialsResult])

    return (
        <UserItemsContext.Provider
            value={{
                loading: state.loading,
                error: state.error,
                userItems: state.userItems,
                essentials: state.essentials,
                getUserItems,
                getEssentials,
                addUserItem,
                addUserItemList,
                removeUserItem,
                updateUserItem,
            }}
        >
            {children}
        </UserItemsContext.Provider>
    )
}
