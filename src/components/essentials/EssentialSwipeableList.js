import { useMutation } from '@apollo/client'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useContext } from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { GET_ESSENTIALS, REMOVE_ESSENTIAL_ITEM } from '../../queries/queries'
import { swipableListStyles } from '../../styles/styles'
import EssentialItem from './EssentialItem'
import { UserContext } from '../../context/UserContext'

const EssentialSwipeableList = ({ data, isAdd }) => {
    const { user } = useContext(UserContext)

    const [removeEssentialItem] = useMutation(REMOVE_ESSENTIAL_ITEM, {
        update(proxy, { data }) {
            const { essentials } = proxy.readQuery({
                query: GET_ESSENTIALS,
                variables: { userId: user?.uid },
            })
            console.log(data)
            // proxy.writeQuery({
            //     query: GET_ESSENTIALS,
            //     data: {
            //         essentials: essentials.filter(
            //             (e) => e.itemId !== removeEssentialItem.itemId,
            //         ),
            //     },
            // })
        },
    })

    const handleRemoveEssentialItem = (item) => {
        const { itemId, itemName, creationDate, categoryName } = item

        // console.log({ item })

        removeEssentialItem({
            variables: {
                itemId,
                userId: user.userId,
            },
            optimisticResponse: {
                __typename: 'Mutation',
                removeEssentialItem: {
                    __typename: 'ItemEssential',
                    itemId,
                    itemName,
                    creationDate,
                    categoryName,
                },
            },
        })
    }

    const renderItem = (item) => {
        const rowHeightAnimatedValue = new Animated.Value(60)
        return (
            <EssentialItem
                item={item}
                isAdd={isAdd}
                rowActionAnimatedValue={rowHeightAnimatedValue}
            />
        )
    }

    const renderHiddenItem = (data, rowMap) => {
        const rowActionAnimatedValue = new Animated.Value(75)
        const rowHeightAnimatedValue = new Animated.Value(60)
        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                rowActionAnimatedValue={rowActionAnimatedValue}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
                onRemoveEssentialItem={() =>
                    handleRemoveEssentialItem(data.item)
                }
            />
        )
    }

    const HiddenItemWithActions = (props) => {
        const {
            swipeAnimatedValue,
            onRemoveEssentialItem,
            rowHeightAnimatedValue,
        } = props

        return (
            <Animated.View
                style={[
                    swipableListStyles.rowBackEssential,
                    { height: rowHeightAnimatedValue },
                ]}
            >
                <TouchableOpacity
                    style={[
                        swipableListStyles.backRightBtn,
                        swipableListStyles.backRightBtnRight,
                        swipableListStyles.removeEssential,
                    ]}
                    onPress={onRemoveEssentialItem}
                >
                    <Animated.View
                        style={[
                            swipableListStyles.trash,
                            {
                                transform: [
                                    {
                                        scale: swipeAnimatedValue.interpolate({
                                            inputRange: [-85, -45],
                                            outputRange: [1, 0],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                ],
                            },
                        ]}
                    >
                        <MaterialCommunityIcons
                            name="trash-can-outline"
                            size={30}
                            color="#fff"
                        />
                    </Animated.View>
                </TouchableOpacity>
            </Animated.View>
        )
    }

    return (
        <SwipeListView
            data={data}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-75}
            disableRightSwipe
            //Some other actions
            rightActionValue={-200}
            leftActionValue={0}
            rightActivationValue={-500}
        />
    )
}

export default EssentialSwipeableList
