import React, { useContext, useEffect } from 'react'
import { loginInStyles } from '../../styles/styles'
import { styleSizes } from '../../styles/styleSizes'
import {
    VStack,
    Text,
    Box,
    Input,
    FormControl,
    Button,
    Center,
    Link,
    Icon,
} from 'native-base'
import { useState } from 'react'
import { emaillRGEX } from '../../assets/regex'
import { UserContext } from '../../context/UserContext'
import { AntDesign } from '@expo/vector-icons'

const LogInForm = ({ navigation }) => {
    const {
        googlePromptAsync,
        googleRequest,
        error,
        apolloError,
        token,
        loginWithEmailAndPassword,
    } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)

    const handleEmailChange = (text) => {
        setEmail(text)
    }
    const handlePasswordChange = (text) => {
        setPassword(text)
    }

    const handleLogIn = () => {
        setInvalidEmail(!emaillRGEX.test(email))

        if (password === '') {
            setInvalidPassword(true)
        } else {
            setInvalidPassword(false)
        }

        if (!invalidEmail && !invalidPassword) {
            loginWithEmailAndPassword(email, password)
        }
    }

    useEffect(() => {
        if (token) navigation.replace('VerticalMenu')
    }, [token])

    return (
        <VStack>
            <Box style={loginInStyles.box}>
                <FormControl isRequired isInvalid={invalidEmail}>
                    <FormControl.Label>
                        <Text style={loginInStyles.text}>Email</Text>
                    </FormControl.Label>
                    <Input
                        onChangeText={handleEmailChange}
                        placeholder="Email"
                        variant="outline"
                        h={44}
                    />
                    <FormControl.ErrorMessage>
                        Please type a valid email
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>
            <Box style={loginInStyles.box}>
                <FormControl isRequired isInvalid={invalidPassword}>
                    <FormControl.Label>
                        <Text style={loginInStyles.text}>Password</Text>
                    </FormControl.Label>
                    <Input
                        onChangeText={handlePasswordChange}
                        type={show ? 'text' : 'password'}
                        placeholder="Password"
                        variant="outline"
                        h={44}
                    />
                    <FormControl.ErrorMessage>
                        Please type a valid password
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>
            <Link>
                <Text style={loginInStyles.forgotPasswordText}>
                    Forgot your password?
                </Text>
            </Link>

            <Box style={loginInStyles.buttonsBox}>
                <VStack>
                    <Button style={loginInStyles.button} onPress={handleLogIn}>
                        Log In
                    </Button>
                    <Center>
                        <Text>OR</Text>
                    </Center>

                    <Button
                        disabled={!googleRequest}
                        onPress={() => googlePromptAsync()}
                        style={loginInStyles.buttonOutline}
                        leftIcon={
                            <Icon
                                style={loginInStyles.buttonText}
                                as={AntDesign}
                                name="google"
                                size={'sm'}
                            />
                        }
                    >
                        <Text style={loginInStyles.buttonText}>
                            Continue with Google
                        </Text>
                    </Button>
                </VStack>
            </Box>
        </VStack>
    )
}

export default LogInForm
