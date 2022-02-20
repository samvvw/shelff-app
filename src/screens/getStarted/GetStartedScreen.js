import React, {useRef} from 'react'
import {View} from 'react-native'
import Swiper from 'react-native-swiper'
import GetStarted1 from './GetStarted1'
import GetStarted2 from './GetStarted2'
import GetStarted3 from './GetStarted3'
import GetStarted4 from './GetStarted4'


const GetStartedScreen = ({navigation}) => {

    //For next button (ref: https://github.com/leecade/react-native-swiper/issues/282 - bravemaster619 commented on Jun 5, 2020)
    const swiper = useRef(null);

    const handleNext = () => {
        if(swiper && swiper.current) {
            swiper.current.scrollBy(1);
        }
    }

    const handleSkip = () => {
        navigation.replace('GetStarted') 
    }

    const handleSign = () => {
        navigation.replace('Sign')
    }

    return (
        <Swiper
            loop={false}
            ref={swiper}
            scrollEnabled={false}
            showsPagination={false}
        >
            <GetStarted1 navigation={navigation} handleNext={handleNext} handleSkip={handleSkip} handleSign={handleSign} />
            <GetStarted2 navigation={navigation} handleNext={handleNext} handleSkip={handleSkip} />
            <GetStarted3 navigation={navigation} handleNext={handleNext} handleSkip={handleSkip} />
            <GetStarted4 navigation={navigation} handleNext={handleNext} handleSkip={handleSkip} handleSign={handleSign}/>
        </Swiper>
    )
}

export default GetStartedScreen
