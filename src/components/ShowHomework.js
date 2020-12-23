import React, {useState} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux'
const {height, width} = Dimensions.get('window');
export default function StatusScreen(props) {
  const state = useSelector(state => state)
  const handlePressed = (subName) => {
    props.getSelectedSubject(subName);
  };
  const getHomework = state.homeworkData.findIndex((e) => e.subjectName === props.subjectName)
  return (
    <TouchableOpacity onPress={(e) => handlePressed(props.subjectName)}>
      <View
        style={{
          height: height * 0.15,
          borderWidth: 1,
          width: width,
          marginTop: 5,
          backgroundColor: '#fff',
          alignSelf: 'center',
        }}>
        <View
          style={{
            height: '100%',
            flexDirection: 'row',
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            justifyContent: 'space-between',
          }}>
          <View style={{width: width * 0.3, height: '100%'}}>
            <Image
               source={  props.imageUrl ? {uri: props.imageUrl } :  require('../assets/images/home.png')}
              resizeMode="stretch"
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View
            style={{
              width: width * 0.7,
              backgroundColor: 'white',
              marginTop: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              {props.subjectName}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
