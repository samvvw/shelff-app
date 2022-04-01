import React, { useState, useEffect } from 'react'
import { View, Text, Image, Platform } from 'react-native'
import { singleChartStyles } from '../../styles/styles'
import { theme } from '../../styles/theme'
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator'
import FreshLogo from '../../../assets/images/status/fresh_status.png'
import ExpiringLogo from '../../../assets/images/status/expiring_status.png'
import ExpiredLogo from '../../../assets/images/status/expired_status.png'

// import LottieView from 'lottie-react-native'
//using 'WithChild' as it accept any child, which I need texts and image here inside of chart



const Fresh = (props) => {
    const { totalItems, numOfItems, status } = props
    const [messageHeading, setMessageHeading] = useState()
    const [messageBody, setMessageBody] = useState()

    useEffect(() => {
        if(status == 'Fresh') {
            if(numOfItems == 0) {
                setMessageHeading('Oh no!')
                setMessageBody('Keep tracking your Shelff to eat only fresh food.')
            } else {
                setMessageHeading('Yummy!')
                setMessageBody('Fresh food gives you more nutrients.')
            }
    
        } else if(status == 'Expiring') {
            if(numOfItems == 0) {
                setMessageHeading('Congratulations!')
                setMessageBody('Nothing is about to expire, keep tracking your Shelff.')
            } else {
                setMessageHeading('Mmmm!')
                setMessageBody('Evaluate if you will eat it or if you should look for a food bank.')
            }
        } else {
            if(numOfItems == 0) {
                setMessageHeading('Congratulations!')
                setMessageBody('Keep tracking your Shelff to avoid wasting money.')
            } else {
                setMessageHeading('luc!')
                setMessageBody('Setup reminders to avoid your food going to waste.')
            }
        }
    }, [numOfItems, status])
    

    return (
        <View style={singleChartStyles.container}>
            <View style={singleChartStyles.numOfItem}>
                <Text>
                    {status}: {numOfItems} item{numOfItems <= 1 ? '' : 's'}
                </Text>
            </View>

            <CircularProgressWithChild
                value={numOfItems}
                maxValue={totalItems}
                radius={Platform.OS === 'ios' ? 150 : 140}
                activeStrokeColor={
                    status == 'Fresh'
                        ? theme.statusColour.darkCyan
                        : status == 'Expiring'
                        ? theme.statusColour.orange
                        : theme.statusColour.firebrickRed
                }
                inActiveStrokeColor={
                    status == 'Fresh'
                        ? theme.statusColour.darkCyan
                        : status == 'Expiring'
                        ? theme.statusColour.orange
                        : theme.statusColour.firebrickRed
                }
                activeStrokeWidth={25}
                inActiveStrokeWidth={25}
                inActiveStrokeOpacity={0.2}
            >
                <View style={singleChartStyles.innerWrapper}>
                    <Image
                            source={status === 'Fresh' ? FreshLogo : status === 'Expiring' ? ExpiringLogo : ExpiredLogo}
                            alt={'Status Logo'}
                            style={singleChartStyles.image}
                        />
                    {/* {status === 'Fresh' && (
                        <LottieView
                            source={require('../../assets/fresh-better-animation.json')}
                            autoPlay
                            loop={true}
                            style={{
                                width: 145,
                                height: 145,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                            }}
                        />
                    )}
                    {status === 'Expiring' && (
                        <LottieView
                            source={require('../../assets/expiring-better-animation.json')}
                            autoPlay
                            loop={true}
                            style={{
                                width: 140,
                                height: 140,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                            }}
                        />
                    )}
                    {status !== 'Fresh' && status !== 'Expiring' && (
                        <LottieView
                            source={require('../../assets/expired-better-animation.json')}
                            autoPlay
                            loop={true}
                            style={{
                                width: 140,
                                height: 140,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                            }}
                        />
                    )} */}
                </View>
            </CircularProgressWithChild>

            <View style={singleChartStyles.messageWrapper}>
                <Text style={singleChartStyles.messageHeading}>{messageHeading}</Text>
                <Text style={singleChartStyles.messageBody}>{messageBody}</Text>
            </View>
        </View>
    )
}

export default Fresh
