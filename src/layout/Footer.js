import { View, Text } from 'native-base'
import React, { useState, useEffect } from 'react'
import { filter } from 'lodash'
import Category from '../components/list/Category'
import Storage from '../components/list/Storage'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import MyShelff from '../components/myShelff/MyShelff'
import EssentialsScreen from '../screens/essentials/EssentialsScreen'

import { theme } from '../styles/theme'

function List(props) {
    const Tab = createMaterialTopTabNavigator()

    const { navigation, shelfItems, setShelfItems, allItems } = props

    return (
        <Tab.Navigator
            initialRouteName="Category"
            screenOptions={{
                tabBarLabelStyle: { fontSize: 15, textTransform: 'none' },
                tabBarActiveTintColor: '#2c3e50',
                tabBarIndicatorStyle: { backgroundColor: '#2c3e50' },
                lazy: true,
                swipeEnabled: false,
            }}
        >
            <Tab.Screen
                name="Category"
                // children={()=>
                //   <Category
                //     navigation={navigation}
                //     setShelfItems={setShelfItems}
                //     allItems={allItems}
                //   />
                // }
            >
                {(props) => (
                    <Category
                        {...props}
                        shelfItems={shelfItems}
                        setShelfItems={setShelfItems}
                        allItems={allItems}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Storage"
                // component={Storage}
                // children={()=>
                //   <Storage
                //   navigation={navigation}
                //   setShelfItems={setShelfItems}
                //   allItems={allItems}
                //   />
                // }
            >
                {(props) => (
                    <Storage
                        {...props}
                        shelfItems={shelfItems}
                        setShelfItems={setShelfItems}
                        allItems={allItems}
                    />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

function Profile() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Profile!</Text>
        </View>
    )
}

function Notifications() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Notifications!</Text>
        </View>
    )
}

const Footer = () => {
    const Tab = createBottomTabNavigator()
    //tabBarActiveTintColor: "#e91e63",

    /***********************************************/
    /******  Temporal data                  ********/
    /***********************************************/
    //Like this is in the database
    const [shelfItems, setShelfItems] = useState([
        {
            id: '1',
            name: 'Apple',
            expiry: 'xxx',
            quantity: 5,
            location: 'Pantry',
            category: 'Fruits',
            essential: true,
            status: 'Fresh',
            action: '',
        },
        {
            id: '2',
            name: 'Banana',
            expiry: 'xxx',
            quantity: 10,
            location: 'Pantry',
            category: 'Fruits',
            essential: true,
            status: 'Fresh',
            action: '',
        },
        {
            id: '3',
            name: 'Mango',
            expiry: 'xxx',
            quantity: 2,
            location: 'Pantry',
            category: 'Fruits',
            essential: false,
            status: 'Fresh',
            action: '',
        },
        {
            id: '4',
            name: 'grape',
            expiry: 'xxx',
            quantity: 1,
            location: 'Fridge',
            category: 'Fruits',
            essential: false,
            status: 'Fresh',
            action: 'Consumed',
        },
        {
            id: '5',
            name: 'Milk',
            expiry: 'xxx',
            quantity: 1,
            location: 'Fridge',
            category: 'Dairy',
            essential: true,
            status: 'Expiring',
            action: '',
        },
        {
            id: '6',
            name: 'Cheese',
            expiry: 'xxx',
            quantity: 1,
            location: 'Fridge',
            category: 'Dairy',
            essential: false,
            status: 'Expiring',
            action: '',
        },
        {
            id: '7',
            name: 'egg',
            expiry: 'xxx',
            quantity: 12,
            location: 'Fridge',
            category: 'Dairy',
            essential: true,
            status: 'Expiring',
            action: '',
        },
        {
            id: '8',
            name: 'Donuts',
            expiry: 'xxx',
            quantity: 5,
            location: 'Pantry',
            category: 'Bread & Cake',
            essential: false,
            status: 'Expired',
            action: '',
        },
        {
            id: '9',
            name: 'Cookies',
            expiry: 'xxx',
            quantity: 3,
            location: 'Pantry',
            category: 'Bread & Cake',
            essential: false,
            status: 'Expired',
            action: '',
        },
    ])

    const [allItems, setAllItems] = useState(
        filter(shelfItems, (item) => {
            return item.action === ''
        }),
    )
    const [freshItems, setFreshItems] = useState(
        filter(shelfItems, (item) => {
            return item.action === '' && item.status === 'Fresh'
        }),
    )
    const [expiringItems, setExpiringItems] = useState(
        filter(shelfItems, (item) => {
            return item.action === '' && item.status === 'Expiring'
        }),
    )
    const [expiredItems, setExpiredItems] = useState(
        filter(shelfItems, (item) => {
            return item.action === '' && item.status === 'Expired'
        }),
    )

    useEffect(() => {
        setAllItems(
            filter(shelfItems, (item) => {
                return item.action === ''
            }),
        )
        setFreshItems(
            filter(shelfItems, (item) => {
                return item.action === '' && item.status === 'Fresh'
            }),
        )
        setExpiringItems(
            filter(shelfItems, (item) => {
                return item.action === '' && item.status === 'Expiring'
            }),
        )
        setExpiredItems(
            filter(shelfItems, (item) => {
                return item.action === '' && item.status === 'Expired'
            }),
        )
    }, [shelfItems, setShelfItems])

    /************************************************/
    /************************************************/
    /************************************************/

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 20,

                    backgroundColor: 'white',
                },

                tabBarActiveTintColor: theme.primaryColour.crimson,
                tabBarInactiveTintColor: theme.textColour.icons,
            }}
        >
            <Tab.Screen
                name="MyShelff"
                options={{
                    tabBarLabel: 'My Shelff',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            >
                {(props) => (
                    <MyShelff
                        {...props}
                        shelfItems={shelfItems}
                        setShelfItems={setShelfItems}
                        allItems={allItems}
                        setAllItems={setAllItems}
                        freshItems={freshItems}
                        expiringItems={expiringItems}
                        setExpiringItems={setExpiringItems}
                        expiredItems={expiredItems}
                        setExpiredItems={setExpiredItems}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Essentials"
                component={EssentialsScreen}
                options={{
                    tabBarLabel: 'Essentials',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="heart"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="center"
                component={MyShelff}
                options={{
                    tabBarItemStyle: { height: 0 },
                }}
            />
            <Tab.Screen
                name="Listing"
                options={{
                    tabBarLabel: 'Listing',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="shape"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            >
                {(props) => (
                    <List
                        {...props}
                        shelfItems={shelfItems}
                        setShelfItems={setShelfItems}
                        allItems={allItems}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Footer
