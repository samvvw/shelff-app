import { useLazyQuery } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { UserContext } from '../../context/UserContext'
import { GET_ESSENTIALS } from '../../queries/queries'
import EssentialsList from '../../components/essentials/EssentialsList'
import { openDatabase, executeTransaction } from '../../services/sqllite'
import { Spinner } from 'native-base'

const EssentialsAddItemScreen = ({ navigation }) => {
    const [items, setItems] = useState([])
    const { user } = useContext(UserContext)
    const [getEssentials, { data, loading }] = useLazyQuery(GET_ESSENTIALS)

    useEffect(() => {
        if (user?.uid) {
            getEssentials({ variables: { userId: user?.uid } })
        } else {
            const db = openDatabase()
            const sql =
                'select *  from items where isEssential = "true" GROUP BY barcode'
            executeTransaction(sql, db, setItems)
        }
    }, [user])

    useEffect(() => {
        if (data) setItems(data?.essentials)
    }, [data])

    return (
        <>
            {loading && <Spinner mt={100} />}
            {items?.length >= 1 && (
                <View style={styles.listContainer}>
                    <EssentialsList data={items} isAdd={true} />
                </View>
            )}
            {items?.length === 0 && (
                <View style={styles.container}>
                    <Image 
                        source={require('../../../assets/icon.png')} 
                        alt={'icon'}
                        style={styles.emptyImage}    
                    />
                    <Text style={styles.emptyTitle}>
                        Your essential list is empty
                    </Text>
                    <Text style={styles.emptySubtitle}>
                        Start adding products to be able to create your list
                    </Text>
                </View>
            )}
        </>
    )
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 30,
        backgroundColor: 'white',
        borderTopWidth: 0.5,
    },
    listContainer: {},
    emptyImage: {
        width: 96,
        height: 96,
        borderRadius: 20,
        marginBottom: 20,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    emptySubtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 15,
    },
})

export default EssentialsAddItemScreen
