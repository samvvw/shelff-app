import { useContext, useEffect } from 'react'
import {
    View,
    Text,
    VStack,
    HStack,
    Image,
    ChevronRightIcon,
    Divider,
    Button,
} from 'native-base'
import { UserContext } from '../../context/UserContext'
import { TouchableOpacity } from 'react-native'
export function Profile({ navigation }) {
    const { user } = useContext(UserContext)

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <VStack
                flex={1}
                width={'100%'}
                paddingTop={10}
                alignItems={'center'}
            >
                {user?.uid && (
                    <TouchableOpacity
                        style={{ width: '100%' }}
                        onPress={() => navigation.push('PersonalInfo')}
                    >
                        <HStack space={5} alignItems={'center'} padding={5}>
                            <Image
                                size={70}
                                resizeMode="contain"
                                borderRadius={100}
                                source={{
                                    uri: `${user.photoURL}`,
                                }}
                                alt="User Profile Picture"
                            />
                            <VStack
                                flex={2}
                                justifyContent={'center'}
                                space={1}
                            >
                                <Text fontSize={'md'} bold>
                                    {user.fullName}
                                </Text>
                                <Text>{user.email}</Text>
                            </VStack>
                            <ChevronRightIcon color={'blue.400'} />
                        </HStack>
                    </TouchableOpacity>
                )}
                <Divider width={'90%'} thickness={2} key={'user-divider'} />
                <Button
                    padding={4}
                    width={'90%'}
                    variant={'ghost'}
                    justifyContent={'flex-start'}
                    colorScheme={'secondary'}
                    onPress={() => navigation.push('SetNotifications')}
                >
                    <Text fontSize={'lg'}>Push Notifications</Text>
                </Button>
                <Divider
                    width={'90%'}
                    thickness={2}
                    key={'notification-divider'}
                />
                <Button
                    padding={4}
                    width={'90%'}
                    variant={'ghost'}
                    justifyContent={'flex-start'}
                    colorScheme={'secondary'}
                >
                    <Text fontSize={'lg'}>Settings</Text>
                </Button>
                <Divider key={'settings-divider'} width={'90%'} thickness={2} />
                {user?.uid ? (
                    <Button
                        padding={4}
                        width={'90%'}
                        variant={'ghost'}
                        justifyContent={'flex-start'}
                        colorScheme={'secondary'}
                    >
                        <Text fontSize={'lg'} color="primary.500">
                            Log Out
                        </Text>
                    </Button>
                ) : (
                    <>
                        <Button
                            padding={4}
                            width={'90%'}
                            variant={'ghost'}
                            justifyContent={'flex-start'}
                            colorScheme={'secondary'}
                        >
                            <Text fontSize={'lg'} color="primary.500">
                                Create an account
                            </Text>
                        </Button>
                        <Divider
                            key={'first-divider'}
                            width={'90%'}
                            thickness={2}
                        />
                        <Button
                            padding={4}
                            width={'90%'}
                            variant={'ghost'}
                            justifyContent={'flex-start'}
                            colorScheme={'secondary'}
                            key={'login-button'}
                            onPress={() => navigation.replace('Sign')}
                        >
                            <Text fontSize={'lg'} color="primary.500">
                                Log In
                            </Text>
                        </Button>
                        <Divider
                            key={'second-divider'}
                            width={'90%'}
                            thickness={2}
                        />
                    </>
                )}
            </VStack>
        </View>
    )
}
