import React, {useState} from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import { getStartedStyles } from "../../styles/styles"
import DateTimePicker from '@react-native-community/datetimepicker'
import AsyncStorage from '@react-native-async-storage/async-storage'

const GetStarted3 = ({navigation, handleNext}) => {

    const [dateTime, setDateTime] = useState(new Date());
    const [show, setShow] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const onChange = (event, value) => {
        const currentDate = value || dateTime;
        setShow(Platform.OS === 'ios');
        setDateTime(currentDate);
        console.log(dateTime.toLocaleString())
    };

    const showTimepicker = () => {
        setShow(true);
        setButtonDisabled(false)
    };


    //Need to set notification here as well
    const setReminder = async () => {
        let hour = dateTime.getHours();
        let minute = dateTime.getMinutes();
        let time = {"hour": hour, "minute": minute}
        let reminder = JSON.stringify(time)

        const check = await AsyncStorage.getItem("reminder")
        console.log('reminderCheck', check)

        await AsyncStorage.setItem("reminder", reminder)
        .then(() => {
            console.log(`Reminder has been set at ${hour}:${minute}`)
            handleNext()
        })
        .catch((error) => {
            console.log("error", error)
        })
    }



    return (
        <View style={getStartedStyles.screenContanier}>
            <View style={getStartedStyles.wrapper}>
                <View style={getStartedStyles.indicator}>
                    <View style={getStartedStyles.indicatorOne}></View>
                    <View style={getStartedStyles.indicatorDone}></View>
                </View>
                <View style={getStartedStyles.textWrapper}>
                    <Text style={getStartedStyles.heading}>When would you like to be reminded?</Text>
                    <View style={getStartedStyles.timeSelector}>
                        <TouchableOpacity onPress={showTimepicker}><Text style={getStartedStyles.timeSelectorLabel}>Select Time</Text></TouchableOpacity>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={dateTime}
                                mode="time"
                                is24Hour={true}
                                display="spinner"
                                onChange={onChange}
                            />
                        )}
                    </View>
                </View>
                <View style={getStartedStyles.buttonWrapperBottom}>
                    <TouchableOpacity
                        disabled={buttonDisabled}
                        onPress={setReminder}
                        style={buttonDisabled ? getStartedStyles.grayButton : getStartedStyles.blueButton}
                    >
                        <Text style={getStartedStyles.whiteText}>Set reminder</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default GetStarted3