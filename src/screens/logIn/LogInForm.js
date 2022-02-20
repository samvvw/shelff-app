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
  Link,
} from "native-base";
import { useState } from "react";
import { emaillRGEX } from "../../assets/regex";

const LogInForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogIn = () => {
    setInvalidEmail(!emaillRGEX.test(email));

    if (password === "") {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
  };

  return (
    <VStack>
      <Box style={loginInStyles.box}>
        <FormControl isInvalid={invalidEmail}>
          <FormControl.Label>
            <Text style={loginInStyles.text}>Email</Text>
            <Text style={loginInStyles.required}>*</Text>
          </FormControl.Label>
          <Input
            onChangeText={handleEmailChange}
            placeholder="Email"
            variant="outline"
            h={35}
          />
          <FormControl.ErrorMessage>
            Please type a valid email
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      <Box style={loginInStyles.box}>
        <FormControl isInvalid={invalidPassword}>
          <FormControl.Label>
            <Text style={loginInStyles.text}>Password</Text>
            <Text style={loginInStyles.required}>*</Text>
          </FormControl.Label>
          <Input
            onChangeText={handlePasswordChange}
            type={show ? "text" : "password"}
            placeholder="Password"
            variant="outline"
            h={35}
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
          <Button onPress={handleLogIn} style={styleSizes.button}>
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
