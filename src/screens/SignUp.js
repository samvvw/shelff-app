import react from "react";
import { Container } from "native-base";
import SignUpForm from "../forms/SignUpForm";
import { signStyles } from "../styles/styles";

const SignUp = () => {
  return (
    // <Container style={signStyles.screenContanier}>
    <SignUpForm />
    // </Container>
  );
};

export default SignUp;
