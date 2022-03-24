import React, { useEffect, useContext } from 'react'
import { FAB, Portal, Provider } from 'react-native-paper'
import { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { screenWidth, screenHeight } from './layout'
import { UserContext } from '../context/UserContext'
import { theme } from '../styles/theme'
import { BlurView } from 'expo-blur'

import Footer from './Footer'


const BlurScreen = () => {
    return (
        <BlurView intensity={10} style={styles.blur} tint="light" />
    )
}


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
                    {open ? <BlurScreen /> : null}

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
                                label: 'MANUAL ENTRY',
                                labelTextColor: theme.primaryColour.crimson,
                                labelStyle: {
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                },
                                onPress: handleEssentialsAddItem,
                            },
                            {
                                style: {
                                    backgroundColor:
                                        theme.primaryColour.crimson,
                                    marginRight: screenWidth / 2 - 42,
                                },
                                icon: 'barcode-scan',
                                label: 'SCAN BARCODE',
                                labelTextColor: theme.primaryColour.crimson,
                                labelStyle: {
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                },
                                onPress: handleEssentialsAddItem,
                            },
                            {
                                style: {
                                    backgroundColor:
                                        theme.primaryColour.crimson,
                                    marginRight: screenWidth / 2 - 42,
                                },
                                icon: 'heart-outline',
                                label: 'ESSENTIALS',
                                labelTextColor: theme.primaryColour.crimson,
                                labelStyle: {
                                    backgroundColor: 'white',
                                    borderRadius: 20,
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



const styles = new StyleSheet.create({

    blur: {
        width: screenWidth,
        height: screenHeight,
    },
    blurColor: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    }

})