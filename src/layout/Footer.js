import { View, Text } from 'native-base'
import React, { useState, useEffect, useContext } from 'react'
import Category from '../components/list/Category'
import Storage from '../components/list/Storage'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MyShelff from '../components/myShelff/MyShelff'
import EssentialsScreen from '../screens/essentials/EssentialsScreen'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { Profile } from '../screens/profile/Profile'
import { theme } from '../styles/theme'
import { UserContext } from '../context/UserContext'
import { UserItemsContext } from '../context/UserItemsContext'

import HomeIcon from '../../assets/images/icons/HomeIcon.js'
import EssentialIcon from '../../assets/images/icons/EssentialIcon.js'
import ListingIcon from '../../assets/images/icons/ListingIcon.js'
import ProfileIcon from '../../assets/images/icons/ProfileIcon.js'


function List(props) {
    const Tab = createMaterialTopTabNavigator()

    const { navigation, shelfItems, allItems } = props

    return (
        <Tab.Navigator
            initialRouteName="Category"
            screenOptions={{
                tabBarLabelStyle: { fontSize: 15, textTransform: 'none' },

                tabBarStyle: { backgroundColor: theme.secondaryColour.chip },
                tabBarIndicatorStyle: { backgroundColor: 'transparent' },

                lazy: true,
                swipeEnabled: false,
            }}
        >
            <Tab.Screen
                name="CATEGORY"
                options={{
                    tabBarLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color: focused
                                    ? theme.primaryColour.crimson
                                    : color,
                            }}
                        >
                            CATEGORY
                        </Text>
                    ),
                }}
            >
                {(props) => (
                    <Category
                        {...props}
                        shelfItems={shelfItems}
                        allItems={allItems}
                        navigation={navigation}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="STORAGE"
                options={{
                    tabBarLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color: focused
                                    ? theme.primaryColour.crimson
                                    : color,
                            }}
                        >
                            STORAGE
                        </Text>
                    ),
                }}
            >
                {(props) => (
                    <Storage
                        {...props}
                        shelfItems={shelfItems}
                        allItems={allItems}
                        navigation={navigation}
                    />
                )}
            </Tab.Screen>
        </Tab.Navigator>
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

    const { user } = useContext(UserContext)

    const {
        getUserItems,
        userItems,
        shelfItems: shelfItems,
        allItems: allItems,
        freshItems: freshItems,
        expiringItems: expiringItems,
        expiredItems: expiredItems,
    } = useContext(UserItemsContext)

    useEffect(() => {
        if (user.uid) {
            getUserItems(user.uid)
        }
        // console.log('rendeerr')
    }, [user])

    useEffect(() => {
        if (userItems) {
            // console.log('UserItemsLength', userItems.length)
            // console.log('firstUserItems', userItems[0])
            console.log('expiring', expiringItems)
            console.log('fesh', freshItems)
        }
        console.log('rendeerr USERITEMSJ')
    }, [userItems, expiringItems, freshItems])

    

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 20,
                    backgroundColor: theme.components.chip,
                },
                tabBarActiveTintColor: theme.primaryColour.crimson,
                tabBarInactiveTintColor: theme.textColour.icons,
            }}
        >
            <Tab.Screen
                name="MyShelff"
                options={{
                    tabBarLabel: 'My Shelff',
                    tabBarIcon: ({ color }) => (
                        <HomeIcon
                            color={color}
                        />
                    ),
                }}
            >
                {(props) => (
                    <MyShelff
                        {...props}
                        shelfItems={shelfItems}
                        allItems={allItems}
                        freshItems={freshItems}
                        expiringItems={expiringItems}
                        expiredItems={expiredItems}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Essentials"
                component={EssentialsScreen}
                options={{
                    tabBarLabel: 'Essentials',
                    tabBarIcon: ({ color }) => (
                        <EssentialIcon
                            color={color}
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
                    tabBarIcon: ({color}) => (
                        <ListingIcon
                            color={color}
                        />
                    ),
                }}
            >
                {(props) => (
                    <List
                        {...props}
                        shelfItems={shelfItems}
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
                        <ProfileIcon
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Footer
