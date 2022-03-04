import react from "react";
import { Select } from "native-base";

const CategoryList = (props) => {
  return (
    <Select
      w={120}
      placeholderTextColor="blue"
      borderRadius={15}
      placeholder="Category"
      selectedValue={"1"}
      accessibilityLabel="select category"
      onValueChange={(itemValue) => props.setCategory(itemValue)}
    >
      <Select.Item label="Fruits" value="1" />
      <Select.Item label="Vegetables" value="2" />
      <Select.Item label="Meat" value="3" />
      <Select.Item label="Seafood" value="4" />
      <Select.Item label="Cold cuts" value="5" />
      <Select.Item label="Dairy" value="6" />
      <Select.Item label="Bread cake" value="7" />
      <Select.Item label="Canned food" value="8" />
    </Select>
  );
};

export default CategoryList;
