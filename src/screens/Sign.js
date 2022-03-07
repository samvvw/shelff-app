import { useContext, useEffect } from 'react'
import { Text, Box, Button, VStack, Center, View, Heading } from 'native-base'
import { signStyles } from '../styles/styles'
import { UserContext } from '../context/UserContext'

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
                <Center>
                    <Heading style={signStyles.heading}>
                        <Text style={signStyles.headingText}>Shelff</Text>
                    </Heading>
                </Center>
                {error?.code && <Text>{JSON.stringify(error, null, 2)}</Text>}
                {apolloError && (
                    <Text>
                        Apollo error: {JSON.stringify(apolloError, null, 2)}
                    </Text>
                )}

                <Box style={signStyles.buttonBox}>
                    <Button
                        style={signStyles.button}
                        onPress={() => onSignUp()}
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
                    >
                        Continue with Google
                    </Button>
                </Box>

                <Box style={signStyles.loginButtonBox}>
                    <Button
                        onPress={toLogin}
                        style={signStyles.buttonLink}
                        variant="ghost"
                    >
                        Log In &gt;
                    </Button>
                </Box>
            </VStack>
        </View>
    )
}

export default Sign
