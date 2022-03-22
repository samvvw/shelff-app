import React from 'react'
import { View, Box, Text } from 'native-base'
import { myShelffStyles } from '../../styles/styles'
import { theme } from '../../styles/theme'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import All from './All'
import Fresh from './Fresh'
import Expiring from './Expiring'
import Expired from './Expired'

const Empty = () => {
    return (
        <Box style={myShelffStyles.emptyBox}>
            <Box style={myShelffStyles.box}></Box>
            <Text style={myShelffStyles.textEmpty}>Your Shelf is empty.</Text>
            <Text style={myShelffStyles.subTextEmpty}>
                Tap the add icon below to add items
            </Text>
        </Box>
    )
}

function MyShelff(props) {
    const Tab = createMaterialTopTabNavigator()

    const {
        navigation,
        shelfItems,
        allItems,
        freshItems,
        expiringItems,
        expiredItems,
    } = props

    const totalItems = shelfItems?.length > 0 ? shelfItems.length : 0

    return totalItems == 0 ? (
        <View style={myShelffStyles.container}>
            <Empty />
        </View>
    ) : (
        <Tab.Navigator
            initialRouteName="All"
            screenOptions={{
                tabBarLabelStyle: { fontSize: 15, textTransform: 'none' },
                tabBarActiveTintColor: theme.primaryColour.crimson,
                tabBarInactiveTintColor: theme.textColour.icons,
                tabBarIndicatorStyle: { backgroundColor: 'transparent' },
                lazy: true,
                swipeEnabled: false,
            }}
            tabBarOptions={{
                style: {
                    backgroundColor: theme.components.chip,
                },
            }}
        >
            <Tab.Screen
                name="All"
                children={() => (
                    <All
                        navigation={navigation}
                        shelfItems={shelfItems}
                        allItems={allItems}
                        freshItems={freshItems}
                        expiringItems={expiringItems}
                        expiredItems={expiredItems}
                        totalItems={totalItems}
                    />
                )}
            />
            <Tab.Screen
                name="Fresh"
                children={() => (
                    <Fresh
                        navigation={navigation}
                        freshItems={freshItems}
                        totalItems={totalItems}
                        allItems={allItems}
                    />
                )}
            />
            <Tab.Screen
                name="Expiring"
                children={() => (
                    <Expiring
                        navigation={navigation}
                        expiringItems={expiringItems}
                        totalItems={totalItems}
                        allItems={allItems}
                    />
                )}
            />
            <Tab.Screen
                name="Expired"
                children={() => (
                    <Expired
                        navigation={navigation}
                        expiredItems={expiredItems}
                        totalItems={totalItems}
                        allItems={allItems}
                    />
                )}
            />
        </Tab.Navigator>
    )
}

export default MyShelff
