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

    useEffect(() => {
        if (token) navigation.replace('VerticalMenu')
    }, [token])

    return (
        <View style={signStyles.screenContanier}>
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
                    <Button
                        style={signStyles.button}
                        disabled={!googleRequest}
                        onPress={() => googlePromptAsync()}
                    >
                        Continue with Google
                    </Button>
                </Box>

                <Box style={signStyles.loginButtonBox}>
                    <Button style={signStyles.buttonLink}>
                        <Center>
                            <Text style={signStyles.buttonLinkText}>
                                Log In &gt;
                            </Text>
                        </Center>
                    </Button>
                </Box>
            </VStack>
        </View>
    )
}

export default Sign
