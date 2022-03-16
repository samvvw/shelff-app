import {
    View,
    HStack,
    Button,
    Text,
    VStack,
    Center,
    Box,
    ScrollView,
    Link,
} from 'native-base'
import React from 'react'
import { useState } from 'react'
import LogInForm from './LogInForm'
import { loginInStyles } from '../../styles/styles'

const LogIn = ({ navigation }) => {
    const handleSignUp = () => {
        navigation.push('SignUp')
    }

    return (
        <ScrollView>
            <View>
                <VStack style={loginInStyles.screenContainer}>
                    <Box style={loginInStyles.heading}>
                        <Text style={loginInStyles.hedingText}>
                            Welcome to Shelff
                        </Text>
                    </Box>

                    <LogInForm navigation={navigation} />

                    <Box style={loginInStyles.boxTerm}>
                        <Center>
                            <HStack>
                                <Text style={loginInStyles.termsText}>
                                    By continuing you agree to Shelff
                                </Text>
                                <Link>
                                    <Text style={loginInStyles.buttonTermsText}>
                                        Terms of Service
                                    </Text>
                                </Link>
                            </HStack>
                        </Center>
                    </Box>

                    <Box style={loginInStyles.box}>
                        <Center>
                            <HStack>
                                <Text style={loginInStyles.signUpNotOnShelff}>
                                    Not on Shelff yet?
                                </Text>
                                <Link onPress={handleSignUp}>
                                    <Text style={[loginInStyles.signUpText]}>
                                        Sign up
                                    </Text>
                                </Link>
                            </HStack>
                        </Center>
                    </Box>
                </VStack>
            </View>
        </ScrollView>
    )
}

export default LogIn
