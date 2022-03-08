import { useQuery } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { UserContext } from '../../context/UserContext'
import { GET_ESSENTIALS } from '../../queries/queries'
import EssentialsList from '../../components/essentials/EssentialsList'
import { openDatabase, executeTransaction } from '../../services/sqllite'
import { Spinner } from 'native-base'
import EssentialsModal from '../../components/essentials/EssentialsModal'

const EssentialsAddItemScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const [items, setItems] = useState()
    const { user } = useContext(UserContext)
    const { data } = useQuery(GET_ESSENTIALS, {
        variables: { userId: user?.uid },
    })

    useEffect(() => {
        if (user?.uid) {
            setItems(data?.essentials)
        } else {
            const db = openDatabase()
            const sql = 'select * from items where isEssential = "true"'
            executeTransaction(sql, db, setItems)
        }
    }, [user, data])

    return (
        <>
            {!items && <Spinner />}
            {items?.length ? (
                <View style={styles.listContainer}>
                    <EssentialsList
                        data={items}
                        isAdd={true}
                        setVisible={setVisible}
                    />
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.emptyImage}></View>
                    <Text style={styles.emptyTitle}>
                        Your essential list is empty
                    </Text>
                    <Text style={styles.emptySubtitle}>
                        Start adding products to be able to create your list
                    </Text>
                </View>
            )}
            <EssentialsModal visible={visible} setVisible={setVisible} />
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
    },
    listContainer: {},
    emptyImage: {
        width: 96,
        height: 96,
        backgroundColor: '#C4C4C4',
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
