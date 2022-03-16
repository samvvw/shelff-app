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
import { Image } from 'react-native'
import { signStyles } from '../styles/styles'
import { UserContext } from '../context/UserContext'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { theme } from '../styles/theme'

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
                    <Image
                        style={signStyles.image}
                        source={require('../../assets/images/FinalShelff-Logo.png')}
                    />
                    <Heading style={signStyles.heading}>
                        <Text style={signStyles.headingText}>Shelff</Text>
                    </Heading>
                    <Text style={signStyles.subheading}>
                        Welcome to Shelff.
                    </Text>
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
                            <Icon
                                style={signStyles.buttonText}
                                as={AntDesign}
                                name="google"
                                size={'sm'}
                            />
                        }
                    >
                        <Text style={signStyles.buttonText}>
                            Continue with Google
                        </Text>
                    </Button>
                    <Box style={signStyles.loginButtonBox}>
                        <Button
                            onPress={toLogin}
                            style={signStyles.buttonLink}
                            variant="ghost"
                            endIcon={
                                <Icon
                                    style={signStyles.buttonText}
                                    as={AntDesign}
                                    name="right"
                                    size={'sm'}
                                />
                            }
                        >
                            <Text style={signStyles.buttonText}>Log In</Text>
                        </Button>
                    </Box>
                </Center>
            </VStack>
        </View>
    )
}

export default Sign
