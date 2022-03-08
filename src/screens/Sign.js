import { useContext, useEffect } from 'react'
import {
    Text,
    Box,
    Button,
    VStack,
    Center,
    View,
    Heading,
    Icon,
} from 'native-base'
import { signStyles } from '../styles/styles'
import { UserContext } from '../context/UserContext'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const Sign = ({ navigation }) => {
    const { googlePromptAsync, googleRequest, token, error, apolloError } =
        useContext(UserContext)
    const onSignUp = () => {
        navigation.push('SignUp')
    }
    const toLogin = () => {
        navigation.push('LogIn')
    }

    useEffect(() => {
        if (token) navigation.replace('VerticalMenu')
    }, [token])

    return (
        <View style={signStyles.screenContainer}>
            <VStack style={signStyles.stack}>
                <Center style={{ flexGrow: 2 }}>
                    <Heading style={signStyles.heading}>
                        <Text style={signStyles.headingText}>Shelff</Text>
                    </Heading>

                    <Text fontSize={'md'}>Welcome to Shelff.</Text>
                    {error?.code && (
                        <Text>{JSON.stringify(error, null, 2)}</Text>
                    )}
                    {apolloError && (
                        <Text>
                            Apollo error: {JSON.stringify(apolloError, null, 2)}
                        </Text>
                    )}
                </Center>

                <Center style={signStyles.buttonBox}>
                    <Button
                        style={signStyles.button}
                        onPress={() => onSignUp()}
                        size={'lg'}
                    >
                        Create your Account
                    </Button>
                    <Text textAlign={'center'}>OR</Text>
                    <Button
                        style={signStyles.buttonOutline}
                        disabled={!googleRequest}
                        onPress={() => googlePromptAsync()}
                        variant="outline"
                        colorScheme="primary"
                        size={'lg'}
                        leftIcon={
                            <Icon as={AntDesign} name="google" size={'sm'} />
                        }
                    >
                        Continue with Google
                    </Button>
                    <Box style={signStyles.loginButtonBox}>
                        <Button
                            onPress={toLogin}
                            style={signStyles.buttonLink}
                            variant="ghost"
                            endIcon={
                                <Icon as={AntDesign} name="right" size={'sm'} />
                            }
                        >
                            Log In
                        </Button>
                    </Box>
                </Center>
            </VStack>
        </View>
    )
}

export default Sign
