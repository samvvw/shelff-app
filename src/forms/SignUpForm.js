import react from "react";
import {
  Button,
  FormControl,
  Input,
  VStack,
  Text,
  Box,
  Checkbox,
} from "native-base";

import { signUpStyles } from "../styles/styles";

const SignUpForm = () => {
  return (
    <VStack style={signUpStyles.container}>
      <Box style={signUpStyles.box}>
        <FormControl isRequired>
          <FormControl.Label>Full Name</FormControl.Label>
          <Input
            placeholder="i.e. James Jhonson"
            variant="outline"
            style={signUpStyles.input.width}
          />
        </FormControl>
      </Box>
      <Box style={signUpStyles.box}>
        <FormControl isRequired>
          <FormControl.Label>Create Password</FormControl.Label>
          <Input placeholder="Your Password" variant="outline" />
        </FormControl>
      </Box>
      <Box style={signUpStyles.box}>
        <FormControl isRequired>
          <FormControl.Label>ReType Password</FormControl.Label>
          <Input placeholder="Your Password" variant="outline" />
        </FormControl>
      </Box>
      <Box style={signUpStyles.box}>
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder="Email Address" variant="outline" />
        </FormControl>
      </Box>
      <Box style={signUpStyles.box}>
        <Text>
          Shelff’s priority is your privacy. We will never sell or give your
          information to third parties.
        </Text>
      </Box>

      <Box style={signUpStyles.box}>
        <Checkbox>
          <Text style={signUpStyles.checkbox}>
            I have read and agree to Shelff’s Terms of Service
          </Text>
        </Checkbox>
      </Box>

      <Button style={signUpStyles.button}>Continue</Button>
    </VStack>
  );
};

export default SignUpForm;
