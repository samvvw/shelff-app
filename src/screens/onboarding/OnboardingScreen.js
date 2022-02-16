import React, {useRef} from 'react'
import Swiper from 'react-native-swiper'
import Onboarding1 from './Onboarding1'
import Onboarding2 from './Onboarding2'
import Onboarding3 from './Onboarding3'


const OnboardingScreen = ({navigation}) => {


    //For next button (ref: https://github.com/leecade/react-native-swiper/issues/282 - bravemaster619 commented on Jun 5, 2020)
    const swiper = useRef(null);

    const handleNext = () => {
        if(swiper && swiper.current) {
            swiper.current.scrollBy(1);
        }
    }

    return (
        <Swiper
            loop={false}
            ref={swiper}
            paginationStyle={{
            position: 'absolute',
            top: 200,
            }}
        >
            <Onboarding1 navigation={navigation} handleNext={handleNext}/>
            <Onboarding2 navigation={navigation} handleNext={handleNext}/>
            <Onboarding3 navigation={navigation}/>
        </Swiper>
    )
}

export default OnboardingScreen
