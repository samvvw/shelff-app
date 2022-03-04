import react from "react";
import {
  Box,
  FlatList,
  HStack,
  Text,
  Spacer,
  VStack,
  Button,
} from "native-base";
const List = (props) => {
  return (
    <Box>
      <FlatList
        marginBottom={200}
        data={props.items}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.cItemName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.dExpirationDate}
                </Text>
              </VStack>
              <Spacer />
              <Button>Remove</Button>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default List;
