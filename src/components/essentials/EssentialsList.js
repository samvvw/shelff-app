import { FlatList } from 'native-base'
import EssentialItem from './EssentialItem'

const EssentialsList = ({ data, isAdd }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <EssentialItem item={item} isAdd={isAdd} />
            )}
            keyExtractor={(item) => item.itemId}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
        />
    )
}

export default EssentialsList
