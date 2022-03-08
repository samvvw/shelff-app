import react from "react";
import { Select, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const LocationList = (props) => {
  return (
    <Select
      w={140}
      placeholderTextColor="blue"
      borderRadius={15}
      placeholder="select location"
      selectedValue={"1"}
      accessibilityLabel="select location"
      onValueChange={(itemValue) => props.setLocation(itemValue)}
      dropdownIcon={
        <Icon as={Ionicons} size="5" color={"gray.500"} name="chevron-down" />
      }
    >
      <Select.Item label="Fridge" value="1" />
      <Select.Item label="Frezzer" value="2" />
      <Select.Item label="Pantry" value="3" />
    </Select>

    // <Picker
    //   w={140}
    //   borderRa
    //   selectedValue={1}
    //   style={{ height: 50, width: 150 }}
    //   onValueChange={(itemValue) => props.setLocation(itemValue)}
    // >
    //   <Picker.Item label="Fridge" value="1" />
    //   <Picker.Item label="Frezzer" value="2" />
    //   <Picker.Item label="Pantry" value="3" />
    // </Picker>
  );
};

export default LocationList;
