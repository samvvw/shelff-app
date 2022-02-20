import React from "react";
import { loginInStyles } from "../../styles/styles";
import { styleSizes } from "../../styles/styleSizes";
import {
  VStack,
  Text,
  Box,
  Input,
  FormControl,
  Button,
  Center,
} from "native-base";

const LogInForm = () => {
  return (
    <VStack>
      <Box style={loginInStyles.box}>
        <FormControl>
          <FormControl.Label>
            <Text style={loginInStyles.text}>Email</Text>
            <Text style={loginInStyles.required}>*</Text>
          </FormControl.Label>
          <Input placeholder="Email" variant="outline" h={35} />
        </FormControl>
      </Box>
      <Box style={loginInStyles.box}>
        <FormControl>
          <FormControl.Label>
            <Text style={loginInStyles.text}>Password</Text>
            <Text style={loginInStyles.required}>*</Text>
          </FormControl.Label>
          <Input placeholder="Password" variant="outline" h={35} />
        </FormControl>
      </Box>
      <Button style={loginInStyles.forgotPassword}>
        <Text style={loginInStyles.forgotPasswordText}>
          Forgot your password?
        </Text>
      </Button>

      <Box style={loginInStyles.buttonsBox}>
        <VStack>
          <Button style={styleSizes.button}>
            <Text style={loginInStyles.buttonText}>Log In</Text>
          </Button>
          <Center>
            <Text>OR</Text>
          </Center>

          <Button style={styleSizes.button}>
            <Text style={loginInStyles.buttonText}>Continue with Google</Text>
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default LogInForm;
