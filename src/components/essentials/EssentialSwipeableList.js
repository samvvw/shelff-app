import { useContext } from 'react'
import { Animated, TouchableOpacity, Text, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { swipableListStyles } from '../../styles/styles'
import EssentialItem from './EssentialItem'
import { UserContext } from '../../context/UserContext'
import RemoveIcon from '../../../assets/images/icons/RemoveIcon.js'


const EssentialSwipeableList = ({
    data,
    isAdd,
    onLocalRemove,
    onServerRemove,
}) => {
    const { user } = useContext(UserContext)

    const handleRemoveEssentialItem = (item) => {
        if (!user?.uid) onLocalRemove(item)
        else onServerRemove(item)
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
        const rowHeightAnimatedValue = new Animated.Value(65)
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
                                            inputRange: [-90, -45],
                                            outputRange: [1, 0],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                ],
                            },
                        ]}
                    >
                        <RemoveIcon/>
                        <Text style={swipableListStyles.btnText}>Remove</Text>
                    </Animated.View>
                </TouchableOpacity>
            </Animated.View>
        )
    }

    return (
        <View style={swipableListStyles.essentialContainer}>
            <SwipeListView
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, i) => item?.itemId + i}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={90}
                rightOpenValue={-90}
                disableRightSwipe
                //Some other actions
                rightActionValue={-200}
                leftActionValue={0}
                rightActivationValue={-500}
            />
        </View>
    )
}

export default EssentialSwipeableList
