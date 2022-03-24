import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'
//When to send Notifications
export const handleNotificationDates = (selectedDate, today) => {
    //in second
    const duration = (Date.parse(selectedDate) - Date.parse(today)) / 1000

    //notification date for expiring
    if (duration < 3 * 86400) {
        return []
    } else if (duration >= 3 * 86400 && duration < 8 * 86400) {
        const first = duration * 0.5
        const second = duration * 0.75
        const expired = duration
        return [first, second, expired]
    } else if (duration >= 8 * 86400 && duration < 15 * 86400) {
        const first = duration * 0.5
        const second = duration * 0.75
        const third = duration - 86400 //expiry-1day
        const expired = duration
        return [first, second, third, expired]
    } else if (duration >= 15 * 86400 && duration < 31 * 86400) {
        const first = duration * 0.5
        const second = duration * 0.75
        const third = duration * 0.9
        const fourth = duration - 3 * 86400 //expiry-3days
        const expired = duration
        return [first, second, third, fourth, expired]
    } else if (duration >= 31 * 86400 && duration < 91 * 86400) {
        const first = duration * 0.75
        const second = duration * 0.8
        const third = duration * 0.9
        const fourth = duration - 7 * 86400 //expiry-3days
        const expired = duration
        return [first, second, third, fourth, expired]
    } else if (duration >= 91 * 86400) {
        const first = duration * 0.75
        const second = duration * 0.8
        const third = duration * 0.9
        const fourth = duration - 15 * 86400 //expiry-3days
        const expired = duration
        return [first, second, third, fourth, expired]
    }
}

//Setting up Notification
export const setNotification = async (
    itemName,
    location,
    date,
    notificationTimings,
) => {
    const permission = await AsyncStorage.getItem('permission')
    // console.log(permission)

    if (permission == 'granted') {
        //getreminder time
        AsyncStorage.getItem('reminder')
            .then((data) => {
                // let reminderTime = JSON.parse(data)
                // const hInSec = reminderTime.hour * 60 * 60
                // const mInSec = reminderTime.minute * 60

                //To show the notification alert
                Notifications.setNotificationHandler({
                    handleNotification: async () => ({
                        shouldShowAlert: true,
                        shouldPlaySound: true,
                        shouldSetBadge: false,
                    }),
                })

                //Instant Notification
                Notifications.scheduleNotificationAsync({
                    content: {
                        title: `Shelff`,
                        body: `${itemName} in ${location == 1 ? "Fridge" : location == 2 ? "Freezer" : "Pantry"} (Expiry: ${date})`,
                    },
                    trigger: null,
                }).catch((error) => {
                    console.log('error', error)
                })

                /****************************************************/
                /* Scheduled Notification ***************************/
                /* We won't show in presentation, so commenting out */
                /****************************************************/
                // notificationTimings.map((notificate) => {
                //     const flatNotificate = notificate - (notificate % 86400)
                //     const dateTime = flatNotificate + hInSec + mInSec

                //     //Scheduled Notification (it can be passed with UNIXTIME wich is mmsecond)
                //     Notifications.scheduleNotificationAsync({
                //         content: {
                //             title: 'Expiring Alert',
                //             body: `${itemName} in ${location == 1 ? "Fridge" : location == 2 ? "Freezer" : "Pantry"} (Expiry: ${date})`,
                //         },
                //         trigger: { seconds: dateTime },
                //     }).catch((error) => {
                //         console.log('error', error)
                //     })

                //     //To Check Scheduled Notifications
                //     Notifications.getAllScheduledNotificationsAsync()
                //     .then((data) => {
                //         console.log('allNotifications', data)
                //     })
                //     .catch((error) => {
                //         console.log('error', error)
                //     })
                // })
            })
            .catch((error) => {
                console.log('error', error)
            })
    }
}
