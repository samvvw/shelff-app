import { useLazyQuery } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { UserContext } from '../../context/UserContext'
import { GET_ESSENTIALS } from '../../queries/queries'
import EssentialsList from '../../components/essentials/EssentialsList'
import { openDatabase, executeTransaction } from '../../services/sqllite'
import { Spinner } from 'native-base'
import { screenWidth, screenHeight } from '../../layout/layout'

const EssentialsAddItemScreen = ({ navigation }) => {
    const [items, setItems] = useState([])
    const { user, idToken } = useContext(UserContext)
    const [getEssentials, { data, loading }] = useLazyQuery(GET_ESSENTIALS)

    useEffect(() => {
        if (user?.uid) {
            getEssentials({
                variables: { userId: user?.uid },
                context: {
                    headers: {
                        Authorization: `Bearer ${idToken}`,
                    },
                },
            })
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
            {loading && <Spinner style={styles.spinner} />}
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
        height: screenHeight / 2,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        position: 'relative',
        top: 100,
    },
    listContainer: {
        height: screenHeight,
        backgroundColor: 'white',
    },
    emptyImage: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: 'lightgray',
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    emptySubtitle: {
        fontSize: 16,
        textAlign: 'center',
        width: '60%',
    },
})

export default EssentialsAddItemScreen
