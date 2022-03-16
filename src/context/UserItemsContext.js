import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { getActionFromState } from '@react-navigation/native'
import { createContext, useReducer, useEffect } from 'react'
import {
    ADD_USER_ITEM,
    ADD_USER_ITEM_LIST,
    GET_ESSENTIALS,
    GET_USER_ITEMS,
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
    const [addUserItemRequest, addUserItemResponse] = useMutation(ADD_USER_ITEM)

    const addUserItem = (
        itemId,
        userId,
        quantity,
        expirationDate,
        locationId,
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
            },
            refetchQueries: [{ query: GET_USER_ITEMS, variables: { userId } }],
        })
    }

    // useEffect(() => {
    //     console.log('addUserItemResponse', addUserItemResponse.error)
    //     console.log('addUserItemResponse', addUserItemResponse.loading)
    // }, [addUserItemResponse])

    // Add User Item List

    const [addUserItemListRequest, addUserItemListResponse] =
        useMutation(ADD_USER_ITEM_LIST)

    const addUserItemList = (itemList) => {
        addUserItemListRequest({
            variables: {
                itemList,
            },
            refetchQueries: [
                {
                    query: GET_USER_ITEMS,
                    variables: { userId: itemList[0].userId },
                },
            ],
        })
    }
    // useEffect(() => {
    //     console.log('addUserItemListResponse', addUserItemListResponse.error)
    //     console.log('addUserItemListResponse', addUserItemListResponse.loading)
    // }, [addUserItemListResponse])

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
            }}
        >
            {children}
        </UserItemsContext.Provider>
    )
}
