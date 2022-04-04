import { useContext, useEffect, useState } from 'react'
import {
    Text,
    Box,
    Button,
    VStack,
    Center,
    View,
    Heading,
    Icon,
} from 'native-base'
import { Image } from 'react-native'
import { signStyles } from '../styles/styles'
import { UserContext } from '../context/UserContext'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { theme } from '../styles/theme'
import { UserItemsContext } from '../context/UserItemsContext'
import { openDatabase } from '../services/sqllite'
import {
    deleteAllItemsInLocalDB,
    getAllItemsInLocalDB,
} from '../components/barcode/saveItems'

import Logo from '../../assets/images/logo-with-letter.png'
import Loader from '../components/loader/Loader'

const Sign = ({ navigation }) => {
    const [items, setItems] = useState()
    const {
        googlePromptAsync,
        googleRequest,
        token,
        error,
        apolloError,
        user,
        loading,
    } = useContext(UserContext)
    const { addUserItemList } = useContext(UserItemsContext)

    const onSignUp = () => {
        navigation.push('SignUp')
    }
    const toLogin = () => {
        navigation.push('LogIn')
    }

    useEffect(() => {
        if (token) {
            // TODO: Send items to database
            getAllItemsInLocalDB(setItems)
            // navigation.replace('VerticalMenu')
        }
    }, [token])

    useEffect(() => {
        if (items?.length > 0) {
            // console.log('----user----', user)
            // console.log('----items----', items)
            const itemsList = items.map((item) => {
                const expDateFormatted = new Date(item.expirationDate)
                    .toISOString()
                    .split('T')[0]

                return {
                    itemId: item.barcode,
                    userId: user.uid,
                    quantity: item.quantity,
                    expirationDate: expDateFormatted,
                    shelfId: item.shelfId,
                    locationId: +item.locationId,
                    isEssential: item.isEssential === 'true' ? true : false,
                }
            })
            // console.log('----Items List----', itemsList)
            addUserItemList(itemsList)
            // console.log('-----FINISHED ADDING ITEMS TO USER ITEMS LIST-----')
        }
        if (items) {
            deleteAllItemsInLocalDB()
            navigation.replace('VerticalMenu')
        }
    }, [items])

    return (
        <>
            {loading && <Loader />}
            {!loading && token?.length === 0 && (
                <View style={signStyles.screenContainer}>
                    <Center style={signStyles.logoBox}>
                        <View style={signStyles.image}>
                            <Image source={Logo} alt="Logo" />
                            <Text style={signStyles.subheading}>
                                Welcome to Shelff.
                            </Text>
                        </View>

                        {error?.code && (
                            <Text>{JSON.stringify(error, null, 2)}</Text>
                        )}
                        {apolloError && (
                            <Text>
                                Apollo error:{' '}
                                {JSON.stringify(apolloError, null, 2)}
                            </Text>
                        )}
                    </Center>

                    <Center style={signStyles.buttonBox}>
                        <Button
                            style={signStyles.button}
                            onPress={() => onSignUp()}
                            size={'lg'}
                        >
                            Create your Account
                        </Button>
                        <Text textAlign={'center'}>OR</Text>
                        <Button
                            style={signStyles.buttonOutline}
                            disabled={!googleRequest}
                            onPress={() => googlePromptAsync()}
                            variant="outline"
                            colorScheme="primary"
                            size={'lg'}
                            leftIcon={
                                <Icon
                                    style={signStyles.buttonText}
                                    as={AntDesign}
                                    name="google"
                                    size={'sm'}
                                />
                            }
                        >
                            <Text style={signStyles.buttonText}>
                                Continue with Google
                            </Text>
                        </Button>
                        <Box style={signStyles.loginButtonBox}>
                            <Button
                                onPress={toLogin}
                                style={signStyles.buttonLink}
                                variant="ghost"
                                endIcon={
                                    <Icon
                                        style={signStyles.buttonText}
                                        as={AntDesign}
                                        name="right"
                                        size={'sm'}
                                    />
                                }
                            >
                                <Text style={signStyles.buttonText}>
                                    Log In
                                </Text>
                            </Button>
                        </Box>
                    </Center>
                </View>
            )}
        </>
    )
}

export default Sign
