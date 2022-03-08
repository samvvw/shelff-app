import react from "react";
import { openDatabase, executeTransaction } from "../../services/sqllite";

import {
  Box,
  FlatList,
  HStack,
  Text,
  Spacer,
  VStack,
  Button,
  Center,
  ScrollView,
} from "native-base";
const List = ({ navigation, items }) => {
  const handleSetPermanentItems = () => {
    const db = openDatabase();
    const sql = "update items set permanent = 1";
    executeTransaction(sql, db);
    navigation.push("VerticalMenu");
  };

  return (
    <FlatList
      paddingBottom={20}
      data={items}
      keyExtractor={(item) => item.idItem}
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
      ListFooterComponent={
        items?.length && (
          <Center>
            <Button
              style={{ width: "70%", marginTop: 20 }}
              onPress={handleSetPermanentItems}
            >
              <Text>Done</Text>
            </Button>
          </Center>
        )
      }
    />
  );
};

export default List;
