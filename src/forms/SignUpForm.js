import { useContext, useState } from 'react'
import {
    Button,
    FormControl,
    Input,
    VStack,
    Text,
    Box,
    Checkbox,
    Container,
    View,
} from 'native-base'
import { UserContext } from '../context/UserContext'

import { signUpStyles } from '../styles/styles'

const SignUpForm = () => {
    const [signUpState, setSignupState] = useState({
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const { signUpWithEmailAndPassword } = useContext(UserContext)

    const onSubmit = () => {
        signUpWithEmailAndPassword(signUpState.email, signUpState.password)
    }

    return (
        <VStack style={signUpStyles.formStackContainer}>
            <Box style={signUpStyles.box}>
                <FormControl isRequired>
                    <FormControl.Label>Full Name</FormControl.Label>
                    <Input
                        placeholder="i.e. James Jhonson"
                        variant="outline"
                        h={35}
                        value={signUpState.fullName}
                        onChangeText={(value) =>
                            setSignupState((prev) => ({
                                ...prev,
                                fullName: value,
                            }))
                        }
                    />
                </FormControl>
            </Box>
            <Box style={signUpStyles.box}>
                <FormControl isRequired>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                        placeholder="Email Address"
                        variant="outline"
                        h={35}
                        value={signUpState.email}
                        onChangeText={(value) =>
                            setSignupState((prev) => ({
                                ...prev,
                                email: value,
                            }))
                        }
                    />
                </FormControl>
            </Box>
            <Box style={signUpStyles.box}>
                <FormControl isRequired>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input
                        placeholder="Your Password"
                        variant="outline"
                        h={35}
                        value={signUpState.password}
                        onChangeText={(value) =>
                            setSignupState((prev) => ({
                                ...prev,
                                password: value,
                            }))
                        }
                    />
                </FormControl>
            </Box>
            <Box style={signUpStyles.box}>
                <FormControl isRequired>
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input
                        placeholder="Your Password"
                        variant="outline"
                        h={35}
                        value={signUpState.passwordConfirm}
                        onChangeText={(value) =>
                            setSignupState((prev) => ({
                                ...prev,
                                passwordConfirm: value,
                            }))
                        }
                    />
                </FormControl>
            </Box>
            <Box style={signUpStyles.box}>
                <Text style={signUpStyles.textPriority}>
                    Shelff’s priority is your privacy. We will never sell or
                    give your information to third parties.
                </Text>
            </Box>

            <Box style={signUpStyles.box}>
                <Checkbox style={signUpStyles.checkbox}>
                    <Text style={signUpStyles.checkboxText}>
                        I have read and agree to Shelff’s Terms of Service
                    </Text>
                </Checkbox>
            </Box>

            <Button style={signUpStyles.button} onPress={onSubmit}>
                Continue
            </Button>
        </VStack>
    )
}

export default SignUpForm
