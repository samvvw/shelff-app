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
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
    user: {},
    error: {},
    loading: true,
}

export const UserContext = createContext(initialState)

initializeApp({
    apiKey: 'AIzaSyAzBtxl4VZQUjaZ4mztEgMctppJJdtNagQ',
    authDomain: 'shelff-726d8.firebaseapp.com',
    projectId: 'shelff-726d8',
    storageBucket: 'shelff-726d8.appspot.com',
    messagingSenderId: '209418730913',
    appId: '1:209418730913:web:310dc50872d54ae495dfe0',
})

WebBrowser.maybeCompleteAuthSession()
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const [googleRequest, googleResponse, googlePromptAsync] =
        Google.useIdTokenAuthRequest({
            clientId:
                '209418730913-5hr4d615qbo0556u6ob7u36r37fg1fe4.apps.googleusercontent.com',
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

    const signUpWithEmailAndPassword = async (email, password) => {
        try {
            dispatch({ type: 'LOADING_TRUE' })

            const auth = getAuth()

            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
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
    }

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
                signUpWithEmailAndPassword,
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
