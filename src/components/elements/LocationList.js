import react from 'react'
import { Select, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
const LocationList = ({ location, setLocation }) => {
    return (
        <Select
            w={140}
            placeholderTextColor='gray.700'
            borderRadius={15}
            placeholder="select location"
            selectedValue={location}
            color={theme.primaryColour.crimson}
            accessibilityLabel="select location"
            onValueChange={(itemValue) => setLocation(itemValue)}
            dropdownIcon={
                <Icon
                    as={Ionicons}
                    size="5"
                    color={'gray.500'}
                    name="chevron-down"
                />
            }
        >
            <Select.Item label="Fridge" value="1" />
            <Select.Item label="Freezer" value="2" />
            <Select.Item label="Pantry" value="3" />
        </Select>
    )
}

export default LocationList
