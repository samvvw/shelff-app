

// User Item Context test code place this in Vertical Menu

    const {
        error: userItemsError,
        loading: userItemsLoading,
        userItems,
        essentials,
        getUserItems,
        getEssentials,
        addUserItem,
        addUserItemList,
        removeUserItem,
        updateUserItem,
    } = useContext(UserItemsContext)

    useEffect(() => {
        console.log('userItemLoading', userItemsLoading)
        console.log('userItemError', userItemsError)
        console.log('userItems', userItems)
        console.log('essentials', essentials)
        if (userItems) {
            console.log('exp', new Date(+userItems[0].expirationDate))
        }
    }, [userItemsLoading, userItems, userItemsError, essentials])

    useEffect(() => {
        getUserItems('2sipdHBzSzf6xPcBE1UuccOiqH23')
        // getEssentials('2sipdHBzSzf6xPcBE1UuccOiqH23')
    }, [])

    useEffect(() => {
        // setTimeout(() => {
        //     addUserItem(
        //         '12345678',
        //         '2sipdHBzSzf6xPcBE1UuccOiqH23',
        //         4,
        //         '2022-03-31',
        //         1,
        //         true,
        //         1,
        //     )
        // }, 4000)
        if (userItems && userItems?.length > 0) {
            setTimeout(() => {
                console.log(userItems, '<---')
                // removeUserItem(
                //     userItems[0].itemId,
                //     userItems[0].userId,
                //     userItems[0].creationDate,
                // )
                // addUserItemList([
                //     {
                //         itemId: '123456',
                //         userId: '2sipdHBzSzf6xPcBE1UuccOiqH23',
                //         quantity: 1,
                //         expirationDate: '2022-04-07',
                //         shelfId: 1,
                //         locationId: 1,
                //         isEssential: false,
                //     },
                //     {
                //         itemId: '12345678',
                //         userId: '2sipdHBzSzf6xPcBE1UuccOiqH23',
                //         quantity: 1,
                //         expirationDate: '2022-04-08',
                //         shelfId: 1,
                //         locationId: 1,
                //         isEssential: true,
                //     },
                //     {
                //         itemId: '246810',
                //         userId: '2sipdHBzSzf6xPcBE1UuccOiqH23',
                //         quantity: 1,
                //         expirationDate: '2022-04-09',
                //         shelfId: 1,
                //         locationId: 1,
                //         isEssential: true,
                //     },
                // ])
            }, 2000)
        }
    }, [])




// Button for Update

    <Button
                    title="update"
                    onPress={() => {
                        const {
                            itemId,
                            userId,
                            creationDate,
                            quantity,
                            expirationDate,
                            shelfId,
                            locationId,
                            isEssential,
                        } = userItems[0]
                        console.log(expirationDate)

                        const oldDate = new Date('2022-04-30')
                        const newExpDate = new Date(
                            oldDate.getUTCFullYear(),
                            oldDate.getUTCMonth(),
                            oldDate.getUTCDate(),
                            oldDate.getUTCHours(),
                            0,
                            0,
                        )
                        console.log(oldDate, '---', newExpDate)

                        updateUserItem(
                            itemId,
                            userId,
                            creationDate,
                            3,
                            newExpDate.getTime(),
                            shelfId,
                            1,
                            true,
                        )
                        // removeUserItem(itemId, userId, creationDate)
                    }}
                />