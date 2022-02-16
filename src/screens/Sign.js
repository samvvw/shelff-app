import react from "react";
import { Text, Box, Button, VStack, Center, Heading } from "native-base";
import { signStyles } from "../styles/styles";

const Sign = () => {
  const createAccount = () => {};
  return (
    <VStack style={signStyles.screenContanier}>
      <Center>
        <Heading style={signStyles.heading}>
          <Text style={signStyles.headingText}>Shelff</Text>
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet
          elit.
        </Text>
        <Box style={signStyles.buttonBox}>
          <Button style={signStyles.button} onPress={createAccount}>
            Create your Account
          </Button>
          <Button style={signStyles.button}>Continue with Google</Button>
        </Box>
        <Box>
          <Button style={signStyles.buttonLink}>
            <Text style={signStyles.buttonLinkText}>Log In ></Text>
          </Button>
        </Box>
      </Center>
    </VStack>
  );
};

export default Sign;
