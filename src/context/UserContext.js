import { createContext, useState, useReducer, useEffect, useRef } from 'react'
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
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../queries/queries'

const initialState = {
    user: {},
    error: {},
    auth: {},
    token: '',
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
    // const [userTemp, setUserTemp] = useState(null)
    const userTemp = useRef
    const [addUser, { error, loading, data }] = useMutation(ADD_USER)
    const [googleRequest, googleResponse, googlePromptAsync] =
        Google.useIdTokenAuthRequest({
            clientId:
                '209418730913-5hr4d615qbo0556u6ob7u36r37fg1fe4.apps.googleusercontent.com',
        })

    // Sign Up and Login Using GOOGLE
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
                    await addUser({
                        variables: {
                            userId: user.uid,
                            email: user.email,
                            fullName: user.displayName,
                        },
                    })

                    userTemp.current = {
                        user,
                        auth,
                        dispatch: 'GOOGLE_AUTH',
                    }
                } catch (error) {
                    try {
                        await AsyncStorage.removeItem('token')
                    } catch (error) {
                        dispatch({ type: 'ERROR', payload: { error } })
                    }
                    dispatch({ type: 'ERROR', payload: { error } })
                } finally {
                    dispatch({ type: 'LOADING_FALSE' })
                }
            })()
        }
    }, [googleResponse])

    // Sign Up Using EMAIL and PASSWORD
    const signUpWithEmailAndPassword = async (email, password, fullName) => {
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
            await addUser({
                variables: {
                    userId: user.uid,
                    email: user.email,
                    fullName: fullName,
                },
            })

            userTemp.current = {
                user,
                auth,
                fullName,
                dispatch: 'FIREBASE_AUTH',
            }
        } catch (error) {
            try {
                await AsyncStorage.removeItem('token')
            } catch (error) {
                dispatch({ type: 'ERROR', payload: { error } })
            }
            dispatch({ type: 'ERROR', payload: { error } })
        } finally {
            dispatch({ type: 'LOADING_FALSE' })
        }
    }

    // Context State dispatch for Authentication
    useEffect(() => {
        if (error) console.log('error', error.message)
        if (loading) {
            dispatch({ type: 'LOADING_TRUE' })
        }
        if (data && !error && userTemp.current) {
            if (userTemp.current.dispatch === 'FIREBASE_AUTH') {
                dispatch({
                    type: 'FIREBASE_AUTH',
                    payload: userTemp.current,
                })
            }

            if (userTemp.current.dispatch === 'GOOGLE_AUTH') {
                dispatch({
                    type: 'GOOGLE_AUTH',
                    payload: userTemp.current,
                })
            }
            dispatch({ type: 'LOADING_FALSE' })
        }
    }, [data, error, loading])

    // Refresh User Token
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
                apolloError: error,
                token: state.token,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
