import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { find } from 'lodash'
import { createContext, useReducer, useEffect } from 'react'
import {
    ADD_ITEM,
    FIND_ITEM,
    GET_CATEGORIES,
    GET_LOCATIONS,
    UPDATE_ITEM,
} from '../queries/queries'
import { ItemsReducer } from './ItemsReducer'

const initialState = {
    loading: false,
    error: null,
    categories: [],
    locations: [],
    itemFoundDB: null,
    userItems: [],
    createdItem: null,
}

export const ItemsContext = createContext(initialState)

export const ItemsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ItemsReducer, initialState)

    // Get Categories
    const getCategories = useQuery(GET_CATEGORIES)

    useEffect(() => {
        if (getCategories.loading) {
            dispatch({ type: 'LOADING_TRUE' })
        }
        if (getCategories.error) {
            dispatch({ type: 'ERROR', payload: getCategories.error })
        }

        if (getCategories.data) {
            dispatch({ type: 'GET_CATEGORIES', payload: getCategories.data })
            dispatch({ type: 'LOADING_FALSE' })
        }
    }, [getCategories])

    // Get Locations
    const getLocations = useQuery(GET_LOCATIONS)

    useEffect(() => {
        if (getLocations.loading) {
            dispatch({ type: 'LOADING_TRUE' })
        }
        if (getLocations.error) {
            dispatch({ type: 'ERROR', payload: getLocations.error })
        }

        if (getLocations.data) {
            dispatch({ type: 'GET_LOCATIONS', payload: getLocations.data })
            dispatch({ type: 'LOADING_FALSE' })
        }
    }, [getLocations])

    // Find Item in DB
    const [findItem, findItemResult] = useLazyQuery(FIND_ITEM)

    const findItemInDB = (itemId) => {
        findItem({ variables: { itemId } })
    }
    useEffect(() => {
        const { data, error, loading } = findItemResult
        if (error) {
            dispatch({ type: 'ERROR', payload: error })
        }
        if (loading) {
            dispatch({ type: 'LOADING_TRUE' })
        } else {
            dispatch({ type: 'LOADING_FALSE' })
        }
        if (data && !loading && !error) {
            if (data.findItem !== null) {
                dispatch({
                    type: 'ITEM_FOUND_IN_DB',
                    payload: data.findItem,
                })
            } else {
                dispatch({
                    type: 'NO_ITEM_FOUND_IN_DB',
                })
            }
        } else {
            dispatch({
                type: 'NO_ITEM_FOUND_IN_DB',
            })
        }
    }, [findItemResult])

    // Add new Item to database Mutation
    const [addItem] = useMutation(ADD_ITEM)

    // NOT DONE YET NEEDS TO BE TESTED
    const addNewItemToDB = async (itemId, itemName, categoryId) => {
        await addItem({
            variables: {
                itemId,
                itemName,
                categoryId,
            },
            optimisticResponse: {
                __typename: 'Mutation',
                addItem: {
                    __typename: 'Item',
                    itemId: itemId,
                    itemName: itemName,
                    creationDate: new Date().getTime(),
                    categoryName: state.categories.filter(
                        (cat) => cat.categoryId === categoryId,
                    )[0].categoryName,
                },
            },
        })
    }

    // Update Item for general Items
    const [updateItem] = useMutation(UPDATE_ITEM)

    // NOT DONE YET NEEDS TO BE TESTED
    const updateItemDB = async (itemId, itemName, categoryId) => {
        await updateItem({
            variables: {
                itemId,
                itemName,
                categoryId,
            },
            optimisticResponse: {
                __typename: 'Mutation',
                updateItem: {
                    __typename: 'Item',
                    itemId: itemId,
                    itemName: itemName,
                    categoryId: state.categories.filter(
                        (cat) => cat.categoryId === categoryId,
                    )[0].categoryName,
                },
            },
        })
    }

    return (
        <ItemsContext.Provider
            value={{
                loading: state.loading,
                error: state.error,
                itemFoundDB: state.itemFoundDB,
                userItems: state.userItems,
                createdItem: state.createdItem,
                categories: state.categories,
                locations: state.locations,
                findItemInDB,
            }}
        >
            {children}
        </ItemsContext.Provider>
    )
}
