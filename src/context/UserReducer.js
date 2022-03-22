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
                    fullName: action.payload.user.displayName,
                    email: action.payload.user.email,
                    photoURL: action.payload.user.photoURL,
                },
                token: action.payload.user.stsTokenManager.accessToken,
                auth: action.payload.auth,
            }
        case 'FIREBASE_AUTH':
            return {
                ...state,
                error: {},
                user: {
                    uid: action.payload.user.uid,
                    fullName: action.payload.fullName,
                    email: action.payload.user.email,
                    photoURL: action.payload.user.photoURL,
                },
                token: action.payload.user.stsTokenManager.accessToken,
                auth: action.payload.auth,
            }
        case 'STORED_USER':
            return {
                ...state,
                error: {},
                user: {
                    uid: action.payload.userId,
                    fullName: action.payload.fullName,
                    email: action.payload.email,
                    photoURL: action.payload.photoURL,
                },
                token: action.payload.token,
            }
    }
}
