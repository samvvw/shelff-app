export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING_TRUE':
            return { ...state, loading: true }
        case 'LOADING_FALSE':
            return { ...state, loading: false }

        case 'ERROR':
            return { ...state, error: action.payload.error }

        case 'GOOGLE_AUTH':
            return {
                ...state,
                error: {},
                user: {
                    uid: action.payload.user.uid,
                    displayName: action.payload.user.displayName,
                    email: action.payload.user.email,
                    token: action.payload.user.stsTokenManager.accessToken,
                    auth: action.payload.auth,
                },
            }
    }
}
