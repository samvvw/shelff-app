import { useContext, useState } from 'react'
import { View, Text, FormControl, Input, VStack, Button } from 'native-base'
import { UserContext } from '../../context/UserContext'

const PersonalInfo = () => {
    const { user } = useContext(UserContext)
    const [newFullName, setNewFullName] = useState('')

    return (
        <View flex={1} alignItems={'center'}>
            <VStack flex={1} width={'90%'} paddingTop={7}>
                <FormControl isRequired>
                    <FormControl.Label
                        _text={{
                            fontSize: 18,
                        }}
                    >
                        Full Name
                    </FormControl.Label>
                    <Input
                        fontSize={'md'}
                        defaultValue={user && user.fullName}
                    />
                </FormControl>
                <VStack>
                    <Text bold paddingTop={5} fontSize={'md'}>
                        Email
                    </Text>

                    {user && <Text fontSize={'md'}>{user.email}</Text>}
                </VStack>
            </VStack>
            <Button width={'90%'} mb={10} size="lg">
                Save
            </Button>
        </View>
    )
}

export default PersonalInfo
