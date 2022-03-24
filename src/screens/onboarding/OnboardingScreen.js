import React, { useRef } from 'react'
import Swiper from 'react-native-swiper'
import Onboarding1 from './Onboarding1'
import Onboarding2 from './Onboarding2'
import Onboarding3 from './Onboarding3'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { theme } from '../../styles/theme'

const OnboardingScreen = ({ navigation }) => {
    //For next button (ref: https://github.com/leecade/react-native-swiper/issues/282 - bravemaster619 commented on Jun 5, 2020)
    const swiper = useRef(null)

    const handleNext = () => {
        if (swiper && swiper.current) {
            swiper.current.scrollBy(1)
        }
    }

    const handleSkip = () => {
        navigation.replace('GetStarted')
        AsyncStorage.setItem('isFirstTimeOpen', 'no')
    }

    return (
        <Swiper
            loop={false}
            ref={swiper}
            paginationStyle={{
                position: 'absolute',
                top: 80,
            }}
            dotColor={theme.components.boundaryLines}
            activeDotColor={theme.primaryColour.crimson}
        >
            <Onboarding1
                navigation={navigation}
                handleNext={handleNext}
                handleSkip={handleSkip}
            />
            <Onboarding2
                navigation={navigation}
                handleNext={handleNext}
                handleSkip={handleSkip}
            />
            <Onboarding3
                navigation={navigation}
                handleNext={handleNext}
                handleSkip={handleSkip}
            />
        </Swiper>
    )
}

export default OnboardingScreen
