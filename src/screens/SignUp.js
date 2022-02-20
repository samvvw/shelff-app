import react from "react";
import {
  Container,
  Text,
  Center,
  HStack,
  Button,
  Heading,
  Box,
  ScrollView,
} from "native-base";
import SignUpForm from "../forms/SignUpForm";
import { signUpStyles } from "../styles/styles";

const SignUp = () => {
  return (
    <ScrollView>
      <Box style={signUpStyles.heading}>
        <Heading>Create and Account</Heading>
        <Heading size="sm">Welcome to Shelff</Heading>
      </Box>

      <SignUpForm />
      <Center style={signUpStyles.alreadyAccount}>
        <HStack style={signUpStyles.hStack}>
          <Text>Already have an account?</Text>
          <Button style={signUpStyles.buttonLogin}>
            <Text style={signUpStyles.buttonLogin}>Login</Text>
          </Button>
        </HStack>
      </Center>
    </ScrollView>
  );
};

export default SignUp;
