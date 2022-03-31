import { useEffect, useContext } from 'react'
import { Select, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { ItemsContext } from '../../context/ItemsContext'
const CategoryList = ({ category, setCategory }) => {
    const { categories } = useContext(ItemsContext)

    return (
        <Select
            w={140}
            placeholderTextColor='gray.700'
            borderRadius={15}
            placeholder="select category"
            selectedValue={
                category &&
                categories &&
                categories
                    .find((c) => c.categoryName === category)
                    ?.categoryId.toString()
                    ? categories
                          .find((c) => c.categoryName === category)
                          ?.categoryId.toString()
                    : category
            }
            accessibilityLabel="select category"
            onValueChange={(itemValue) => setCategory(itemValue)}
            color={theme.primaryColour.crimson}
            dropdownIcon={
                <Icon
                    as={Ionicons}
                    size="5"
                    color='gray.500'
                    name="chevron-down"
                />
            }
        >
            {categories?.length > 0 &&
                categories.map((category) => {
                    return (
                        <Select.Item
                            label={category.categoryName}
                            value={`${category.categoryId}`}
                            key={category.categoryName}
                        />
                    )
                })}
        </Select>
    )
}

export default CategoryList
