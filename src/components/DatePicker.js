import React, {useState} from 'react';
import {Button, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Item, Input, Icon} from 'native-base'
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import moment from 'moment';

const {height,width} = Dimensions.get('window')

const DateTimePicker = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateTime, setDateTime] = useState('')

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDateTime(moment(date).format('DD-MM-YYYY'))
    props.getTime(moment(date).format('DD-MM-YYYY'))
    hideDatePicker();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {/* <Ionicons
        name="ios-time"
        onPress={showDatePicker}
        color="#495"
        size={25}
      /> */}
      {/* <TouchableOpacity onPress={showDatePicker}><Text>skjkslf</Text></TouchableOpacity> */}
      <Icon type="Ionicons" name="time-outline" size={20}  style={{color:"#c1c5c7"}} onPress={showDatePicker}/>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        is24Hour={false}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimePicker;