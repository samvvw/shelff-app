import { createContext, useReducer, useEffect } from 'react'
import { UserReducer } from './UserReducer'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    GoogleAuthProvider,
    signInWithCredential,
    getIdToken,
} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
    user: {},
    error: {},
    loading: true,
}

export const UserContext = createContext(initialState)
initializeApp({
    apiKey: 'AIzaSyCj4DrILek-uQskmQBN-PDBvJQgtjFKnu4',
    authDomain: 'portfolio-contact-85baf.firebaseapp.com',
    projectId: 'portfolio-contact-85baf',
    storageBucket: 'portfolio-contact-85baf.appspot.com',
    messagingSenderId: '766972105703',
    appId: '1:766972105703:web:2ad0fc1918978b92d5a342',
})

WebBrowser.maybeCompleteAuthSession()
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const [googleRequest, googleResponse, googlePromptAsync] =
        Google.useIdTokenAuthRequest({
            clientId:
                '766972105703-pp07er7id65r1c4eubdv071v92h9j50v.apps.googleusercontent.com',
        })

    useEffect(() => {
        if (googleResponse?.type === 'success') {
            dispatch({ type: 'LOADING_TRUE' })
            ;(async () => {
                try {
                    const { id_token } = googleResponse.params
                    const auth = getAuth()

                    const credential = GoogleAuthProvider.credential(id_token)
                    const { user } = await signInWithCredential(
                        auth,
                        credential
                    )
                    await AsyncStorage.setItem(
                        'token',
                        user.stsTokenManager.accessToken
                    )

                    dispatch({
                        type: 'GOOGLE_AUTH',
                        payload: {
                            user,
                            auth,
                        },
                    })
                } catch (error) {
                    dispatch({ type: 'ERROR', payload: { error } })
                } finally {
                    dispatch({ type: 'LOADING_FALSE' })
                }
            })()
        }
    }, [googleResponse])

    const refreshIdToken = async () => {
        try {
            const currentUser = state.user.auth.currentUser

            const idToken = await getIdToken(currentUser, true)
            if (idToken) {
                await AsyncStorage.setItem('token', idToken)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider
            value={{
                googlePromptAsync,
                refreshIdToken,
                googleRequest,
                user: state.user,
                loading: state.loading,
                error: state.error,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
