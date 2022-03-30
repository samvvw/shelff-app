export const UserItemsReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING_TRUE':
            return { ...state, loading: true }
        case 'LOADING_FALSE':
            return { ...state, loading: false }
        case 'ERROR':
            return { ...state, error: action.payload.error }
        case 'GET_USER_ITEMS':
            // console.log(
            //     classifyUserItemsByStatus(action.payload.userItems)
            //         .expiringItems,
            // )
            const classifiedItems = classifyUserItemsByStatus(
                action.payload.userItems,
            )
            return {
                ...state,
                userItems: action.payload.userItems,
                shelfItems: classifiedItems.shelfItems,
                allItems: classifiedItems.allItems,
                freshItems: classifiedItems.freshItems,
                expiringItems: classifiedItems.expiringItems,
                expiredItems: classifiedItems.expiredItems,
            }
        case 'GET_ESSENTIALS':
            return { ...state, essentials: action.payload.essentials }
    }
}

const classifyUserItemsByStatus = (userItems) => {
    const shelfItems = []
    const freshItems = []
    const expiringItems = []
    const expiredItems = []

    userItems.forEach((item) => {
        const currentDate = new Date(Date.now()).getTime()
        const expDate = new Date(+item.expirationDate).getTime()
        const differenceInDays = (expDate - currentDate) / 1000 / 60 / 60 / 24

        // console.log('now', currentDate)
        // console.log('expiration', expDate)
        // console.log('diff Date', differenceInDays)

        const status =
            differenceInDays < 0
                ? 'Expired'
                : differenceInDays < 3
                ? 'Expiring'
                : 'Fresh'

        const itemObject = {
            id: item.itemId,
            name: item.itemName,
            expiry: new Date(+item.expirationDate),
            quantity: item.quantity,
            location: item.locationName,
            category: item.categoryName,
            essential: item.isEssential,
            status: status,
            action: '',
            expiresIn: Math.floor(differenceInDays),
            creationDate: item.creationDate,
            userId: item.userId,
        }

        shelfItems.push(itemObject)

        if (status === 'Fresh') {
            freshItems.push(itemObject)
        } else if (status === 'Expiring') {
            expiringItems.push(itemObject)
        } else {
            expiredItems.push(itemObject)
        }
    })

    return {
        shelfItems,
        allItems: shelfItems,
        freshItems,
        expiringItems,
        expiredItems,
    }
}
