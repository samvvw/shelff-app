import { View, HStack, Button, Text, VStack, Center, Box } from "native-base";
import React from "react";
import LogInForm from "./LogInForm";
import { loginInStyles } from "../../styles/styles";

const LogIn = ({ navigation }) => {
  return (
    <View>
      <VStack style={loginInStyles.screenContanier}>
        <Box style={loginInStyles.heading}>
          <Text style={loginInStyles.hedingText}>Welcome to Shelff</Text>
        </Box>

        <LogInForm />
        <HStack>
          <Text>By continuing you agree to Shelff</Text>
          <Button>Terms of Service</Button>
        </HStack>
        <Center>
          <HStack>
            <Text>Not on Shelff yet?</Text>
            <Button>Sin Up</Button>
          </HStack>
        </Center>
      </VStack>
    </View>
  );
};

export default LogIn;
