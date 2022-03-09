import { useContext, useState } from 'react'
import {
    Button,
    FormControl,
    Input,
    VStack,
    Text,
    Box,
    Checkbox,
} from 'native-base'
import { UserContext } from '../context/UserContext'

import { signUpStyles } from '../styles/styles'
import { signUpStyle } from '../styles/signUpStyle'

const SignUpForm = () => {
    const [signUpState, setSignupState] = useState({
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })
    const [formErrors, setFormErrors] = useState({
        nameError: '',
        emailError: '',
        passwordLengthError: '',
        passwordConfirmError: '',
    })

    const { signUpWithEmailAndPassword, error, apolloError } =
        useContext(UserContext)

    const onSubmit = () => {
        // name length validation
        if (signUpState.fullName.length < 3) {
            setFormErrors((prev) => ({
                ...prev,
                nameError: 'Name must be at least 3 characters long',
            }))
        } else {
            setFormErrors((prev) => ({
                ...prev,
                nameError: '',
            }))
        }

        // email format validation
        if (!signUpState.email.match(/...*@...*\...+/)) {
            setFormErrors((prev) => ({
                ...prev,
                emailError: 'Please enter a valid Email address.',
            }))
        } else {
            setFormErrors((prev) => ({
                ...prev,
                emailError: '',
            }))
        }

        // password length validation
        if (signUpState.password.length < 6) {
            setFormErrors((prev) => ({
                ...prev,
                passwordLengthError:
                    'Password must be at least 6 characters long.',
            }))
        } else {
            setFormErrors((prev) => ({
                ...prev,
                passwordLengthError: '',
            }))
        }

        // password confirm validation
        if (signUpState.password !== signUpState.passwordConfirm) {
            setFormErrors((prev) => ({
                ...prev,
                passwordConfirmError: "Confirmation Password doesn't match.",
            }))
        } else {
            setFormErrors((prev) => ({
                ...prev,
                passwordConfirmError: '',
            }))
        }

        if (
            !formErrors.emailError &&
            !formErrors.nameError &&
            !formErrors.passwordConfirmError &&
            !formErrors.passwordLengthError
        ) {
            signUpWithEmailAndPassword(
                signUpState.email,
                signUpState.password,
                signUpState.fullName,
            )
        }
    }

    return (
        <VStack style={signUpStyles.formStackContainer}>
            {error?.code === 'auth/email-already-in-use' && (
                <Text>{`Error: user with email ${signUpState.email} already exists`}</Text>
            )}
            {apolloError && <Text>{JSON.stringify(apolloError, null, 2)}</Text>}
            <Box style={signUpStyles.box}>
                <FormControl
                    isRequired
                    isInvalid={formErrors.nameError ? true : false}
                >
                    <FormControl.Label>Full Name</FormControl.Label>
                    <Input
                        placeholder="Full Name"
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
                    {formErrors.nameError && (
                        <FormControl.ErrorMessage>
                            {formErrors.nameError}
                        </FormControl.ErrorMessage>
                    )}
                </FormControl>
            </Box>
            <Box style={signUpStyles.box}>
                <FormControl
                    isRequired
                    isInvalid={formErrors.emailError ? true : false}
                >
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                        placeholder="Email"
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
                    {formErrors.emailError && (
                        <FormControl.ErrorMessage>
                            {formErrors.emailError}
                        </FormControl.ErrorMessage>
                    )}
                </FormControl>
            </Box>
            <Box style={signUpStyles.box}>
                <FormControl
                    isRequired
                    isInvalid={formErrors.passwordLengthError ? true : false}
                >
                    <FormControl.Label>Password</FormControl.Label>
                    <Input
                        placeholder="Password"
                        variant="outline"
                        type="password"
                        h={35}
                        value={signUpState.password}
                        onChangeText={(value) =>
                            setSignupState((prev) => ({
                                ...prev,
                                password: value,
                            }))
                        }
                    />
                    {formErrors.passwordLengthError && (
                        <FormControl.ErrorMessage>
                            {formErrors.passwordLengthError}
                        </FormControl.ErrorMessage>
                    )}
                </FormControl>
            </Box>
            <Box style={signUpStyles.box}>
                <FormControl
                    isRequired
                    isInvalid={formErrors.passwordConfirmError ? true : false}
                >
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input
                        placeholder="Confirm Password"
                        variant="outline"
                        type="password"
                        h={35}
                        value={signUpState.passwordConfirm}
                        onChangeText={(value) =>
                            setSignupState((prev) => ({
                                ...prev,
                                passwordConfirm: value,
                            }))
                        }
                    />
                    {formErrors.passwordConfirmError && (
                        <FormControl.ErrorMessage>
                            {formErrors.passwordConfirmError}
                        </FormControl.ErrorMessage>
                    )}
                </FormControl>
            </Box>
            <Box style={signUpStyles.box}>
                <Text style={signUpStyles.textPriority}>
                    Shelff’s priority is your privacy. We will never sell or
                    give your information to third parties.
                </Text>
            </Box>

            <Box
                style={signUpStyles.checkbox}
                alignItems={'flex-start'}
                paddingLeft={10}
            >
                <Checkbox>
                    <Text> I have read and agree to Shelff’s </Text>
                </Checkbox>
                <Text color={'primary.500'} style={signUpStyles.termsOfService}>
                    Terms of Service
                </Text>
            </Box>

            <Button style={signUpStyles.button} onPress={onSubmit}>
                Continue
            </Button>
        </VStack>
    )
}

export default SignUpForm
