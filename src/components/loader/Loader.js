import { HStack, Spinner, Heading, Box } from 'native-base'

const Loader = () => {
    return (
        <Box
            style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#f2f2f233',
            }}
        >
            <HStack space={2} justifyContent="center">
                <Spinner
                    accessibilityLabel="Loading"
                    size="lg"
                    color="rgba(237, 64, 116, 1)"
                />
                <Heading color="rgba(237, 64, 116, 1)" fontSize="lg">
                    Almost there!
                </Heading>
            </HStack>
        </Box>
    )
}

export default Loader
