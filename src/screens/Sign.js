import react from "react";
import { Text, Box, Button, VStack, Center, Heading } from "native-base";
import { StyleSheet } from "react-native";

import { screenWidth, screenHeight } from "../services/layout";

const Sign = () => {
  const createAccount = () => {};
  return (
    <VStack style={styles.screenContanier}>
      <Center>
        <Heading style={styles.heading}>
          <Text style={styles.headingText}>Shelff</Text>
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet
          elit.
        </Text>
        <Box style={styles.buttonBox}>
          <Button style={styles.button} onPress={createAccount}>
            Create your Account
          </Button>
          <Button style={styles.button}>Continue with Google</Button>
        </Box>
        <Box>
          <Button style={styles.buttonLink}>
            <Text style={styles.buttonLinkText}>Log In ></Text>
          </Button>
        </Box>
      </Center>
    </VStack>
  );
};

const styles = StyleSheet.create({
  screenContanier: {
    height: screenHeight,
    padding: 10,
  },
  heading: {
    paddingTop: 180,
  },
  headingText: {
    fontSize: 72,
  },
  buttonBox: {
    marginTop: screenHeight / 2.7,
  },
  button: {
    margin: 3,
    width: screenWidth / 2,
  },
  buttonLink: {
    backgroundColor: "#fff",
  },
  buttonLinkText: {
    color: "#000",
  },
});

export default Sign;
