import {
    View,
    Text,
    Image,
    Animated,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
} from 'react-native'
import { swipableListStyles } from '../../styles/styles'
import { theme } from '../../styles/theme'
import { SwipeListView } from 'react-native-swipe-list-view'
import { findIndex } from 'lodash'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ConsumedIcon from '../../../assets/images/icons/Consumed.png'
import DonatedIcon from '../../../assets/images/icons/Donate.png'
import BinIcon from '../../../assets/images/icons/Bin.png'

const SwipableList = (props) => {
    const { items, allItems, selectedList } = props

    // console.log(items)

    const actionItem = (rowMap, rowKey, actionTaken) => {
        const newData = [...allItems]
        const index = findIndex(newData, (item) => {
            return item.id === rowKey
        })
        newData[index].action = actionTaken
        // setShelfItems(newData)
        console.log('TODO: ACTION ITEM METHOD SwipableList.js')
    }

    const VisibleItem = (props) => {
        const {
            data,
            rowHeightAnimatedValue,
            removeRow,
            leftActionState,
            rightActionState,
        } = props

        if (rightActionState) {
            // console.log("SWIPE");
            Animated.timing(rowHeightAnimatedValue, {
                toValue: 0,
                duration: 200,
            }).start(() => {
                actionItem()
            })
        }

        const setCategoryIcon = (item) => {
            switch (item.category) {
                case 'Fruits':
                    return require('../../../assets/images/icons/Fruits.png')
                case 'Vegetables':
                    return require('../../../assets/images/icons/Veggies.png')
                case 'Meat':
                    return require('../../../assets/images/icons/Meat.png')
                case 'Seafood':
                    return require('../../../assets/images/icons/Fish.png')
                case 'Cold cuts':
                    return require('../../../assets/images/icons/Chicken.png')
                case 'Dairy':
                    return require('../../../assets/images/icons/Dairy.png')
                case 'Bread cake':
                    return require('../../../assets/images/icons/Bread.png')
                case 'Canned food':
                    return require('../../../assets/images/icons/CanFood.png')
                default:
                    return require('../../../assets/icon.png')
            }
        }

        return (
            <Animated.View
                style={[
                    swipableListStyles.rowFront,
                    {
                        height: rowHeightAnimatedValue,
                        borderLeftColor:
                            data.item.status == 'Fresh'
                                ? theme.statusColour.darkCyan
                                : data.item.status == 'Expiring'
                                ? theme.statusColour.orange
                                : theme.statusColour.firebrickRed,
                    },
                ]}
            >
                <TouchableHighlight style={swipableListStyles.rowFrontVisible}>
                    <View style={swipableListStyles.flex}>
                        <Image
                            source={setCategoryIcon(data.item)}
                            alt={'Fresh'}
                            style={swipableListStyles.image}
                        />
                        <View style={swipableListStyles.flexRight}>
                            <View style={swipableListStyles.flexRightChild}>
                                <Text
                                    style={swipableListStyles.name}
                                    numberOfLines={1}
                                >
                                    {data.item.name}
                                </Text>
                                {data.item.essential ? (
                                    <MaterialCommunityIcons
                                        name="cards-heart"
                                        size={25}
                                        color={theme.primaryColour.crimson}
                                    />
                                ) : null}
                            </View>
                            <View style={swipableListStyles.flexRightChild}>
                                <Text
                                    numberOfLines={1}
                                    style={
                                        swipableListStyles.flexRightChildBottomText
                                    }
                                >
                                    Shelf Life: xx days
                                </Text>
                                <Text
                                    numberOfLines={1}
                                    style={
                                        swipableListStyles.flexRightChildBottomText
                                    }
                                >
                                    {data.item.location}
                                </Text>
                                <Text
                                    numberOfLines={1}
                                    style={
                                        swipableListStyles.flexRightChildBottomText
                                    }
                                >
                                    Qty: {data.item.quantity}
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </Animated.View>
        )
    }
    const renderItem = (data, rowMap) => {
        const rowHeightAnimatedValue = new Animated.Value(60)
        return (
            <VisibleItem
                data={data}
                rowActionAnimatedValue={rowHeightAnimatedValue}
            />
        )
    }

    /****************/
    /**** Actions ***/
    /****************/
    const onRowDidOpen = (rowKey) => {
        console.log('This row opened', rowKey)
    }

    const onLeftActionStatusChange = (rowKey) => {
        console.log('onLeftActionStatusChange', rowKey)
    }

    const onRightActionStatusChange = (rowKey) => {
        console.log('onRightActionStatusChang', rowKey)
    }

    const onRightAction = (rowKey) => {
        console.log('onRightAction', rowKey)
    }

    const onLeftAction = (rowKey) => {
        console.log('onLeftAction', rowKey)
    }

    const HiddenItemWithActions = (props) => {
        const {
            data,
            swipeAnimatedValue,
            onConsume,
            onDonate,
            onExpire,
            leftActionActivated,
            rightActionActivated,
            rowActionAnimatedValue,
            rowHeightAnimatedValue,
        } = props

        if (rightActionActivated) {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 500,
            }).start()
        }

        return (
            <Animated.View
                style={[
                    swipableListStyles.rowBack,
                    { height: rowHeightAnimatedValue },
                ]}
            >
                {data.item.status != 'Expired' ? (
                    <TouchableOpacity
                        style={[
                            swipableListStyles.backRightBtn,
                            swipableListStyles.backRightBtnLeft,
                        ]}
                        onPress={onDonate}
                    >
                        <Animated.View
                            style={[
                                swipableListStyles.trash,
                                {
                                    transform: [
                                        {
                                            scale: swipeAnimatedValue.interpolate(
                                                {
                                                    inputRange: [-90, -45],
                                                    outputRange: [1, 0],
                                                    extrapolate: 'clamp',
                                                },
                                            ),
                                        },
                                    ],
                                },
                            ]}
                        >
                            <Image source={DonatedIcon} alt="Donated" />
                        </Animated.View>
                    </TouchableOpacity>
                ) : null}

                {!leftActionActivated && (
                    <Animated.View
                        style={[
                            swipableListStyles.backRightBtn,
                            swipableListStyles.backRightBtnRight,
                            {
                                flex: 1,
                                width: rowActionAnimatedValue,
                            },
                        ]}
                    >
                        {data.item.status == 'Expired' ? (
                            <TouchableOpacity
                                style={[
                                    swipableListStyles.backRightBtn,
                                    swipableListStyles.backRightBtnRight,
                                    swipableListStyles.expired,
                                ]}
                                onPress={onExpire}
                            >
                                <Animated.View
                                    style={[
                                        swipableListStyles.trash,
                                        {
                                            transform: [
                                                {
                                                    scale: swipeAnimatedValue.interpolate(
                                                        {
                                                            inputRange: [
                                                                -90, -45,
                                                            ],
                                                            outputRange: [1, 0],
                                                            extrapolate:
                                                                'clamp',
                                                        },
                                                    ),
                                                },
                                            ],
                                        },
                                    ]}
                                >
                                    <Image source={BinIcon} alt="Bin" />
                                </Animated.View>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={[
                                    swipableListStyles.backRightBtn,
                                    swipableListStyles.backRightBtnRight,
                                    swipableListStyles.consumed,
                                ]}
                                onPress={onConsume}
                            >
                                <Animated.View
                                    style={[
                                        swipableListStyles.trash,
                                        {
                                            transform: [
                                                {
                                                    scale: swipeAnimatedValue.interpolate(
                                                        {
                                                            inputRange: [
                                                                -90, -45,
                                                            ],
                                                            outputRange: [1, 0],
                                                            extrapolate:
                                                                'clamp',
                                                        },
                                                    ),
                                                },
                                            ],
                                        },
                                    ]}
                                >
                                    <Image
                                        source={ConsumedIcon}
                                        alt="consumed"
                                    />
                                </Animated.View>
                            </TouchableOpacity>
                        )}
                    </Animated.View>
                )}
            </Animated.View>
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
                onConsume={() => actionItem(rowMap, data.item.id, 'Consumed')}
                onDonate={() => actionItem(rowMap, data.item.id, 'Donated')}
                onExpire={() => actionItem(rowMap, data.item.id, 'Expired')}
            />
        )
    }

    return (
        <View>
            {/* selectedList is for Listing, '' is for MyShelff */}
            <Text style={swipableListStyles.header}>
                {selectedList ? selectedList : ''}
            </Text>
            {items.length === 0 ? <Text>No Item</Text> : null}

            <SwipeListView
                keyExtractor={(item) =>
                    item.itemId + item.creationDate + `${Math.random() * 1000}`
                }
                data={items}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                disableRightSwipe //avoid swipe on the left side
                //Some other actions
                onRowDidOpen={onRowDidOpen}
                rightActionValue={-200}
                leftActionValue={0}
                rightActivationValue={-500}
                onLeftAction={onLeftAction}
                onRightAction={onRightAction}
                onLeftActionStatusChange={onLeftActionStatusChange}
                onRightActionStatusChange={onRightActionStatusChange}
                contentContainerStyle={swipableListStyles.container}
            />

            <StatusBar style="auto" />
        </View>
    )
}

export default SwipableList
