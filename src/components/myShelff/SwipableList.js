import { View, Text, Image, Animated, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native'
import { swipableListStyles } from "../../styles/styles"
import { SwipeListView } from 'react-native-swipe-list-view';
import { findIndex } from 'lodash'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



const SwipableList = (props)=> {

    const {items, allItems, setShelfItems} = props

    // console.log(items)

    const actionItem = (rowMap, rowKey, actionTaken) => {
        const newData = [...allItems];
        const index = findIndex(newData, item => {
            return item.id === rowKey
        })
        newData[index].action = actionTaken
        setShelfItems(newData)
        console.log('Action: Item Consumed')
    };

    const VisibleItem = (props) => {
        const {
        data,
        rowHeightAnimatedValue,
        removeRow,
        leftActionState,
        rightActionState,
        } = props;

        if (rightActionState) {
        console.log("SWIPE");
        Animated.timing(rowHeightAnimatedValue, {
            toValue: 0,
            duration: 200,
        }).start(() => {
            actionItem();
        });
        }
        return (
        <Animated.View
            style={[swipableListStyles.rowFront, { 
                height: rowHeightAnimatedValue,         
                borderLeftColor: data.item.status=='Fresh' ? 'green' : data.item.status=='Expiring' ? 'orange' : 'red'
            }]}
        >
            <TouchableHighlight style={swipableListStyles.rowFrontVisible}>
                <View style={swipableListStyles.flex}>
                    <Image 
                        source={require('../../../assets/icon.png')} 
                        alt={'Fresh'}
                        style={swipableListStyles.image}    
                    />
                    <View style={swipableListStyles.flexRight}>
                        <View style={swipableListStyles.flexRightChild}>
                            <Text style={swipableListStyles.name} numberOfLines={1}>
                                {data.item.name}
                            </Text>
                            {data.item.essential ?
                                <MaterialCommunityIcons
                                    name="cards-heart"
                                    size={25}
                                    color="red"
                                /> 
                            : null}
                        </View>
                        <View style={swipableListStyles.flexRightChild}>
                            <Text numberOfLines={1} style={swipableListStyles.flexRightChildBottomText}>
                                Shelf Life: xx days
                            </Text>
                            <Text numberOfLines={1} style={swipableListStyles.flexRightChildBottomText}>
                                {data.item.location}
                            </Text>
                            <Text numberOfLines={1} style={swipableListStyles.flexRightChildBottomText}>
                                Qty: {data.item.quantity}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        </Animated.View>
        );
    };
    const renderItem = (data, rowMap) => {
        const rowHeightAnimatedValue = new Animated.Value(60);
        return (
        <VisibleItem
            data={data}
            rowActionAnimatedValue={rowHeightAnimatedValue}
        />
        );
    };
    
/****************/
/**** Actions ***/
/****************/
    const onRowDidOpen = (rowKey) => {
        console.log("This row opened", rowKey);
    };
    
    const onLeftActionStatusChange = (rowKey) => {
        console.log("onLeftActionStatusChange", rowKey);
    };
    
    const onRightActionStatusChange = (rowKey) => {
        console.log("onRightActionStatusChang", rowKey);
    };
    
    const onRightAction = (rowKey) => {
        console.log("onRightAction", rowKey);
    };
    
    const onLeftAction = (rowKey) => {
        console.log("onLeftAction", rowKey);
    };
    
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
        } = props;
    
        if (rightActionActivated) {
        Animated.spring(rowActionAnimatedValue, {
            toValue: 500,
        }).start();
        }
    
        return (
        <Animated.View
            style={[swipableListStyles.rowBack, { height: rowHeightAnimatedValue }]}
        >
            {data.item.status != 'Expired' ?
                <TouchableOpacity
                    style={[swipableListStyles.backRightBtn, swipableListStyles.backRightBtnLeft]}
                    onPress={onDonate}>
                    
                    <Animated.View
                        style={[
                            swipableListStyles.trash,
                            {transform: [{
                                scale: swipeAnimatedValue.interpolate({
                                    inputRange: [-90, -45],
                                    outputRange: [1, 0],
                                    extrapolate: "clamp",
                                    }),
                                }],
                            },
                        ]}
                    >
                        <MaterialCommunityIcons
                            name="hand-heart"
                            size={25}
                            color="#fff"
                        />
                    </Animated.View>
                </TouchableOpacity>
            : null}
    
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
                {data.item.status == 'Expired' ?
                    <TouchableOpacity
                    style={[swipableListStyles.backRightBtn, swipableListStyles.backRightBtnRight, swipableListStyles.expired]}
                    onPress={onExpire}
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
                                    extrapolate: "clamp",
                                    }),
                                },
                                ],
                            },
                            ]}
                        >
                            <MaterialCommunityIcons
                                name="trash-can"
                                size={25}
                                color="#fff"
                            />
                        </Animated.View>
                    </TouchableOpacity>
                    : 
                    <TouchableOpacity
                        style={[swipableListStyles.backRightBtn, swipableListStyles.backRightBtnRight, swipableListStyles.consumed]}
                        onPress={onConsume}
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
                                        extrapolate: "clamp",
                                        }),
                                    },
                                    ],
                                },
                                ]}
                            >
                            <MaterialCommunityIcons
                                name="thumb-up"
                                size={25}
                                color="#fff"
                            />
                        </Animated.View>
                    </TouchableOpacity>
                    }
            </Animated.View>
            )}
        </Animated.View>
        );
    };
    
    const renderHiddenItem = (data, rowMap) => {
        const rowActionAnimatedValue = new Animated.Value(75);
        const rowHeightAnimatedValue = new Animated.Value(60);
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
        );
    };
    
    return (
        <View >

            <Text style={swipableListStyles.header}>Food Inventory</Text>
            {items.length === 0 ? <Text>No Item</Text> : null}

            <SwipeListView
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
    );
    
}

export default SwipableList;