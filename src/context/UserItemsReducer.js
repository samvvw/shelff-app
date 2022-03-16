export const UserItemsReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING_TRUE':
            return { ...state, loading: true }
        case 'LOADING_FALSE':
            return { ...state, loading: false }
        case 'ERROR':
            return { ...state, error: action.payload.error }
        case 'GET_USER_ITEMS':
            return { ...state, userItems: action.payload.userItems }
        case 'GET_ESSENTIALS':
            return { ...state, essentials: action.payload.essentials }
    }
}
