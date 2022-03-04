import react from "react";
import { Select } from "native-base";

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
    >
      <Select.Item label="Fridge" value="1" />
      <Select.Item label="Frezzer" value="2" />
      <Select.Item label="Pantry" value="3" />
    </Select>
  );
};

export default LocationList;
