import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'native-base'
import { StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

const Barcode = ({
    cameraHeight,
    setBarCodeNumber,
    setScanned,
    scanned,
    setcameraHeight,
}) => {
    const [hasPermission, setHasPermission] = useState(null)

    const styles = () =>
        StyleSheet.create({
            container: {
                height: cameraHeight,
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
            },
        })

    useEffect(() => {
        ;(async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])

    const handleBarCodeScanned = ({ type, data }) => {
        setcameraHeight('10%')
        setScanned(true)
        //data is the number in the scan code
        setBarCodeNumber(data)
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <View style={styles().container}>
            <BarCodeScanner
                onBarCodeScanned={
                    props.scanned ? undefined : handleBarCodeScanned
                }
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
                <Button
                    title={'Tap to Scan Again'}
                    onPress={() => setScanned(false)}
                />
            )}
        </View>
    )
}

export default Barcode
