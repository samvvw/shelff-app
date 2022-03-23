import React, { useEffect, useContext } from 'react'
import { FAB, Portal, Provider } from 'react-native-paper'
import { useState } from 'react'
import { screenWidth, screenHeight } from './layout'
import { Text } from 'react-native'
import { UserContext } from '../context/UserContext'
import { theme } from '../styles/theme'

import Footer from './Footer'

const VerticalMenu = ({ navigation }) => {
    const { error } = useContext(UserContext)
    const [state, setState] = React.useState({ open: false })

    const onStateChange = ({ open }) => setState({ open })

    const { open } = state

    useEffect(() => {
        if (error?.message) console.log('error', error)
    }, [error])

    const handleBarcodeScan = () => {
        navigation.push('AddItemBarcode')
    }

    const handleEssentialsAddItem = () => {
        navigation.push('AddEssentialsItem')
    }

    const handleManualEntry = () => {
        navigation.push('ManualEntryItem')
    }

    return (
        <>
            <Provider>
                <Portal>
                    <FAB.Group
                        fabStyle={{
                            borderWidth: 2,
                            borderColor: theme.primaryColour.crimson,
                            backgroundColor: 'white',
                            marginBottom: screenHeight < 750 ? 45 : 5,
                            borderRadius: 50,
                            alignSelf: 'center',
                        }}
                        color={theme.primaryColour.crimson}
                        style={{
                            backgroundColor: 'transparent',
                        }}
                        open={open}
                        icon={open ? 'close-thick' : 'plus'}
                        actions={[
                            {
                                style: {
                                    backgroundColor:
                                        theme.primaryColour.crimson,
                                    marginRight: screenWidth / 2 - 42,
                                },
                                icon: 'format-letter-case',
                                label: 'Manual Entry',
                                labelTextColor: 'white',
                                labelStyle: {
                                    backgroundColor:
                                    theme.primaryColour.crimson,
                                },
                                onPress: handleManualEntry,
                            },
                            {
                                style: {
                                    backgroundColor:
                                        theme.primaryColour.crimson,
                                    marginRight: screenWidth / 2 - 42,
                                },
                                icon: 'barcode-scan',
                                label: 'Scan',
                                labelTextColor: 'white',
                                labelStyle: {
                                    backgroundColor:
                                    theme.primaryColour.crimson,
                                },
                                onPress: handleBarcodeScan,
                            },
                            {
                                style: {
                                    backgroundColor:
                                        theme.primaryColour.crimson,
                                    marginRight: screenWidth / 2 - 42,
                                },
                                icon: 'heart-outline',
                                label: 'Essentials',
                                labelTextColor: 'white',
                                labelStyle: {
                                    backgroundColor:
                                    theme.primaryColour.crimson,
                                },
                                onPress: handleEssentialsAddItem,
                            },
                        ]}
                        onStateChange={onStateChange}
                        onPress={() => {
                            if (!open) {
                                //   alert("hello");
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
                <Footer />
            </Provider>
        </>
    )
}

export default VerticalMenu
