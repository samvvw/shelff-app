export const ItemsReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING_TRUE':
            return { ...state, loading: true }
        case 'LOADING_FALSE':
            return { ...state, loading: false }
        case 'ERROR':
            return { ...state, error: action.payload.error }
        case 'GET_CATEGORIES':
            return { ...state, categories: action.payload.categories }
        case 'GET_LOCATIONS':
            return { ...state, locations: action.payload.locations }
        case 'ITEM_FOUND_IN_DB':
            return { ...state, itemFoundDB: action.payload }
        case 'NO_ITEM_FOUND_IN_DB':
            return { ...state, itemFoundDB: null }
        case 'ADD_ITEM_TO_DB':
            return { ...state, createdItem: action.payload.createdItem }
        case 'GET_USER_ITEMS':
            return { ...state, userItems: action.payload.userItems }
    }
}
