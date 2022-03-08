import { Switch } from 'native-base'
import { useState } from 'react'
import { Modal, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import LocationList from '../elements/LocationList'
import QuantityCounter from './QuantityCounter'

const EssentialsModal = ({ item, visible, setVisible }) => {
    const [location, setLocation] = useState(item?.locationId)
    const [quantity, setQuantity] = useState(item?.quantity)
    const [isEssential, setIsEssential] = useState(true)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(false)
            }}
        >
            <View
                style={{
                    height: '90%',
                    marginTop: 'auto',
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.itemCodeContainer}>
                        <Text>{item?.itemId}</Text>
                    </View>
                    <View style={styles.itemNameContainer}>
                        <Text style={styles.itemName}>{item?.itemName}</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.pair}>
                            <View style={styles.icon}></View>
                            <Text>Dairy</Text>
                        </View>
                        <View style={styles.pair}>
                            <View style={styles.icon}></View>
                            <Text>
                                Expiration Date
                                <Text style={{ color: '#f00' }}>*</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>
                            Storage Location{' '}
                            <Text style={{ color: '#f00' }}>*</Text>
                        </Text>
                        <LocationList
                            location={location}
                            setLocation={setLocation}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Quantity</Text>
                        <QuantityCounter
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>
                            Add to Essentials Items
                        </Text>
                        <Switch
                            isChecked={isEssential}
                            onToggle={() => setIsEssential((prev) => !prev)}
                            size="lg"
                        />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <View style={[styles.button, styles.primary]}>
                                <Text style={{ color: 'white' }}>
                                    Add to my shelf
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <View style={styles.button}>
                                <Text>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    itemCodeContainer: {
        borderWidth: 1,
        width: '50%',
        alignItems: 'center',
        borderColor: '#ccc',
        alignSelf: 'center',
        marginVertical: 30,
        borderRadius: 5,
    },
    itemName: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        marginVertical: 6,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#e8e8e8',
    },
    primary: {
        backgroundColor: '#307aff',
        color: '#fff',
    },
    row: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    pair: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: '#ddda',
        borderRadius: 5,
        marginRight: 5,
    },
    formControl: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderColor: '#eee',
    },
    label: {
        alignSelf: 'center',
    },
    buttonsContainer: {
        marginTop: 20,
    },
})

export default EssentialsModal
